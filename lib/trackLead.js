'use client';

import { logLeadEvent } from '@/app/actions';
import { getAttribution } from '@/lib/attribution';

// Records that a lead happened (type + where it came from). Never sends personal data.
export function trackLead(type) {
  try {
    const attributie = getAttribution();
    logLeadEvent({ type, page: window.location.pathname, ...attributie }).catch(() => {});
  } catch {}
}
