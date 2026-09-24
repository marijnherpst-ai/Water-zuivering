import 'server-only';
import { Resend } from 'resend';

// Totdat het domein water-zuivering.nl geverifieerd is bij Resend, kan er alleen
// verstuurd worden vanaf onboarding@resend.dev naar het eigen (Resend-account)
// e-mailadres. Na verificatie zet je dit om naar bijv. 'Water-zuivering <info@water-zuivering.nl>'.
const AFZENDER = 'Water-zuivering <onboarding@resend.dev>';

export async function stuurWelkomstMail({ naam, email }) {
  if (!process.env.RESEND_API_KEY || !email) return { success: false };

  const resend = new Resend(process.env.RESEND_API_KEY);
  const voornaam = (naam || '').split(' ')[0] || '';

  const { error } = await resend.emails.send({
    from: AFZENDER,
    to: email,
    subject: 'Bedankt voor uw aanvraag bij Water-zuivering',
    html: welkomstMailHtml(voornaam),
  });

  return { success: !error, error };
}

const TELEFOON = '06 26 94 48 77';
const TELEFOON_LINK = 'tel:+31626944877';

function welkomstMailHtml(voornaam) {
  const aanhef = voornaam ? `Bedankt, ${voornaam}!` : 'Bedankt voor uw aanvraag!';
  return `
<div style="background:#F7F8FA; padding:32px 16px; font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <div style="max-width:480px; margin:0 auto; background:#FFFFFF; border:1px solid #E4E7EC; border-radius:20px; overflow:hidden;">

    <div style="padding:28px 32px 0;">
      <table cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td style="width:36px;"><img src="https://www.water-zuivering.nl/assets/img/mail-logo.svg" width="36" height="36" alt="Water-zuivering" style="display:block; border-radius:18px;" /></td>
          <td style="padding-left:10px; font-size:17px; font-weight:800; color:#0B0D10;">Water-zuivering</td>
        </tr>
      </table>
    </div>

    <div style="padding:24px 32px 4px;">
      <p style="margin:0; font-size:11px; font-weight:700; letter-spacing:0.08em; text-transform:uppercase; color:#C6890F;">Aanvraag ontvangen</p>
      <h1 style="margin:8px 0 0; font-size:22px; line-height:1.25; color:#0B0D10;">${aanhef}</h1>
      <p style="margin:14px 0 0; font-size:15px; line-height:1.6; color:#5B6472;">
        We hebben uw aanvraag goed ontvangen en gaan er meteen mee aan de slag.
      </p>
    </div>

    <div style="margin:20px 32px 0; padding:16px 20px; background:#0B0D10; border-radius:14px;">
      <p style="margin:0; font-size:13px; color:#B4BBC8;">U hoort van ons</p>
      <p style="margin:2px 0 0; font-size:19px; font-weight:800; color:#EDA71B;">Binnen 1 werkdag</p>
    </div>

    <div style="margin:14px 32px 0; padding:16px 20px; border:1px solid #E4E7EC; border-radius:14px; text-align:center;">
      <p style="margin:0 0 6px; font-size:13px; color:#5B6472;">Wilt u liever niet wachten en direct bellen?</p>
      <a href="${TELEFOON_LINK}" style="font-size:18px; font-weight:800; color:#0B0D10; text-decoration:none;">📞 ${TELEFOON}</a>
    </div>

    <div style="margin:24px 32px 0;">
      <p style="margin:0 0 6px; font-size:12px; font-weight:700; letter-spacing:0.04em; text-transform:uppercase; color:#5B6472;">Wie is Water-zuivering?</p>
      <p style="margin:0; font-size:14px; line-height:1.6; color:#5B6472;">
        Wij zijn een Nederlandse specialist in waterzuivering voor thuis. We adviseren, leveren en installeren zelf, met eigen monteurs &mdash; geen tussenpartijen.
      </p>
    </div>

    <div style="margin:16px 32px 0;">
      <p style="margin:0 0 6px; font-size:12px; font-weight:700; letter-spacing:0.04em; text-transform:uppercase; color:#5B6472;">Wat doet het apparaat?</p>
      <p style="margin:0; font-size:14px; line-height:1.6; color:#5B6472;">
        Ons 3-traps osmosesysteem filtert PFAS, chloor, kalk, medicijnresten en microplastics uit uw kraanwater. Compact geplaatst onder het aanrecht, direct zuiver water uit de kraan &mdash; zonder flessenwater of gedoe.
      </p>
    </div>

    <div style="margin:16px 32px 0; padding:14px 18px; background:#F7F8FA; border-radius:14px;">
      <table cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td style="font-size:20px; padding-right:10px;">🛡️</td>
          <td style="font-size:14px; font-weight:700; color:#0B0D10;">10 jaar garantie, inclusief installatie door onze eigen monteurs</td>
        </tr>
      </table>
    </div>

    <div style="margin:16px 32px 24px; padding:18px 20px; border:1px solid #E4E7EC; border-radius:14px;">
      <p style="margin:0 0 6px; font-size:12px; font-weight:700; letter-spacing:0.04em; text-transform:uppercase; color:#C6890F;">Wist u dit al?</p>
      <p style="margin:0 0 12px; font-size:14px; line-height:1.6; color:#5B6472;">
        Steeds vaker zit er PFAS ("forever chemicals") in het Nederlandse kraanwater. Benieuwd hoe uw eigen regio ervoor staat ten opzichte van de RIVM-gezondheidsnorm, en hoe ons systeem PFAS eruit filtert?
      </p>
      <a href="https://www.water-zuivering.nl/pfas-check" style="font-size:13px; font-weight:700; color:#0B0D10; text-decoration:none; border-bottom:2px solid #EDA71B;">Check gratis hoeveel PFAS er in uw kraanwater zit &rarr;</a>
    </div>

    <div style="padding:0 32px 28px; text-align:center;">
      <a href="https://www.water-zuivering.nl" style="display:inline-block; background:#EDA71B; color:#0B0D10; font-size:14px; font-weight:700; text-decoration:none; padding:12px 24px; border-radius:999px;">Bekijk onze website</a>
    </div>

    <div style="padding:18px 32px; border-top:1px solid #E4E7EC; text-align:center;">
      <p style="margin:0; font-size:12px; color:#5B6472;">Heeft u ondertussen vragen? Bel ${TELEFOON} of antwoord gerust op deze e-mail.</p>
      <p style="margin:6px 0 0; font-size:12px; color:#5B6472;">Met vriendelijke groet,<br>Team Water-zuivering</p>
    </div>

  </div>
</div>
`;
}
