import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { gaqlMutate } from '@/lib/dashboard/googleAdsApi';

// Admin-only generic Google Ads mutate endpoint, so campaign changes (keywords,
// ads, settings) can be applied in bulk instead of click by click in the UI.
// Body: { operations: MutateOperation[], validateOnly?: boolean }.
// validateOnly defaults to true: a caller has to opt in explicitly to really
// change the account.
export async function POST(request) {
  const supabase = await createClient();
  const { data: isAdmin } = await supabase.rpc('is_admin');
  if (!isAdmin) return NextResponse.json({ ok: false, reden: 'Geen toegang.' }, { status: 403 });

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, reden: 'Ongeldige JSON.' }, { status: 400 });
  }

  const operations = body?.operations;
  if (!Array.isArray(operations) || operations.length === 0) {
    return NextResponse.json({ ok: false, reden: 'Geen operations opgegeven.' }, { status: 400 });
  }
  if (operations.length > 100) {
    return NextResponse.json({ ok: false, reden: 'Maximaal 100 operations per keer.' }, { status: 400 });
  }
  const validateOnly = body.validateOnly !== false;

  try {
    const results = await gaqlMutate(operations, { validateOnly });
    return NextResponse.json({ ok: true, validateOnly, results });
  } catch (e) {
    return NextResponse.json({ ok: false, validateOnly, reden: e.message }, { status: 500 });
  }
}
