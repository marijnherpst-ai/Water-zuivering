import { NextResponse } from 'next/server';
import { checkStoringen } from '@/lib/storingen';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const postcode = (searchParams.get('postcode') || '').trim();
  const huisnummer = (searchParams.get('huisnummer') || '').trim();

  if (!/^[1-9][0-9]{3}\s?[A-Za-z]{2}$/.test(postcode) || !huisnummer) {
    return NextResponse.json({ status: 'ongeldig' }, { status: 400 });
  }

  const result = await checkStoringen(postcode, huisnummer);
  return NextResponse.json(result);
}
