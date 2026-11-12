import { NextResponse } from 'next/server';
import { bepaalHardheid, vulLiveAan, vulLiveAanInBuurt } from '@/lib/waterhardheid/lookup';
import { pfasCheck } from '@/lib/pfasData';

// Public lookup for the /waterhardheid checker. The address is only used to ask
// PDOK (the government address register) for the location; nothing is stored.
const PDOK = 'https://api.pdok.nl/bzk/locatieserver/search/v3_1/free';
const VELDEN = 'weergavenaam,woonplaatsnaam,gemeentenaam,provincienaam,centroide_ll,postcode';

async function zoekPdok(q, type) {
  const url = `${PDOK}?q=${encodeURIComponent(q)}&fq=type:${type}&rows=1&fl=${VELDEN}`;
  const res = await fetch(url, { next: { revalidate: 60 * 60 * 24 * 30 } });
  if (!res.ok) throw new Error('PDOK ' + res.status);
  const json = await res.json();
  return json?.response?.docs?.[0] || null;
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const postcode = (searchParams.get('postcode') || '').toUpperCase().replace(/\s+/g, '');
  const huisnummer = (searchParams.get('huisnummer') || '').trim();

  if (!/^[1-9][0-9]{3}[A-Z]{2}$/.test(postcode)) {
    return NextResponse.json({ ok: false, reden: 'Vul een geldige postcode in, bijvoorbeeld 1234 AB.' }, { status: 400 });
  }
  const nummer = huisnummer.match(/^(\d{1,5})\s*[-\s]?\s*([a-zA-Z0-9]{0,4})$/);
  if (!nummer) {
    return NextResponse.json({ ok: false, reden: 'Vul een geldig huisnummer in, bijvoorbeeld 12 of 12A.' }, { status: 400 });
  }

  try {
    let doc = await zoekPdok(`postcode:${postcode} and huisnummer:${nummer[1]}`, 'adres');
    let opAdres = Boolean(doc);
    if (!doc) doc = await zoekPdok(`postcode:${postcode}`, 'postcode');
    if (!doc) {
      return NextResponse.json({ ok: false, reden: 'Deze postcode kennen we niet. Controleer de postcode en probeer het opnieuw.' }, { status: 404 });
    }

    const [lon, lat] = (doc.centroide_ll.match(/-?[\d.]+/g) || []).map(Number);
    const basis = bepaalHardheid({ lon, lat, woonplaats: doc.woonplaatsnaam, gemeente: doc.gemeentenaam, provincie: doc.provincienaam });
    let hardheid = await vulLiveAan(basis, doc.postcode || postcode, opAdres ? nummer[1] + (nummer[2] || '') : '1');
    if (hardheid && hardheid.min == null) hardheid = await vulLiveAanInBuurt(hardheid, lon, lat, doc.woonplaatsnaam, doc.postcode || postcode);
    if (!hardheid) {
      return NextResponse.json({ ok: false, reden: 'Voor dit adres konden we het waterbedrijf niet bepalen.' }, { status: 404 });
    }

    const pfas = pfasCheck(postcode);
    return NextResponse.json(
      {
        ok: true,
        adres: opAdres ? doc.weergavenaam : `${postcode} ${doc.woonplaatsnaam}`,
        opAdres,
        woonplaats: doc.woonplaatsnaam,
        gemeente: doc.gemeentenaam,
        provincie: doc.provincienaam,
        hardheid,
        pfas: pfas ? { label: pfas.label, hex: pfas.hex, provincie: pfas.provincie } : null,
      },
      { headers: { 'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=604800' } }
    );
  } catch {
    return NextResponse.json({ ok: false, reden: 'De adresservice is even niet bereikbaar. Probeer het zo nog eens.' }, { status: 502 });
  }
}
