'use client';

import { logLeadEvent } from '@/app/actions';
import { getAttribution } from '@/lib/attribution';

// Google Ads conversion "Offerte aanvragen" (account water-zuivering, tag AW-18381773084).
// Sent directly through the Google tag, so it does not depend on the GA4 import.
// Runs in Consent Mode: without ad consent Google only receives a cookieless ping.
const ADS_LEAD_CONVERSION = 'AW-18381773084/kKhiCIm0ubodEJyyjr1E';
// Only real requests count: no giveaway entries and no WhatsApp/PFAS clicks.
const ADS_LEAD_TYPES = ['aanmelden', 'contact', 'besparing', 'chat_terugbellen'];

// Records that a lead happened (type + where it came from). Never sends personal data.
export function trackLead(type) {
  try {
    if (ADS_LEAD_TYPES.includes(type) && typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', { send_to: ADS_LEAD_CONVERSION });
    }
  } catch {}
  try {
    const attributie = getAttribution();
    logLeadEvent({ type, page: window.location.pathname, ...attributie }).catch(() => {});
  } catch {}
}
