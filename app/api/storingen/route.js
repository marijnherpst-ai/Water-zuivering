import { NextResponse } from 'next/server';
import { checkStoringenOpAdres, checkStoringenOpPlaats } from '@/lib/storingen';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const postcode = (searchParams.get('postcode') || '').trim();
  const huisnummer = (searchParams.get('huisnummer') || '').trim();
  const plaats = (searchParams.get('plaats') || '').trim();

  if (plaats) {
    if (plaats.length < 2) {
      return NextResponse.json({ status: 'ongeldig' }, { status: 400 });
    }
    const result = await checkStoringenOpPlaats(plaats);
    return NextResponse.json(result);
  }

  if (!/^[1-9][0-9]{3}\s?[A-Za-z]{2}$/.test(postcode) || !huisnummer) {
    return NextResponse.json({ status: 'ongeldig' }, { status: 400 });
  }

  const result = await checkStoringenOpAdres(postcode, huisnummer);
  return NextResponse.json(result);
}
