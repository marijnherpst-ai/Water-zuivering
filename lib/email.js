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
    html: `
      <div style="font-family: sans-serif; max-width: 480px; margin: 0 auto; color: #0B0D10;">
        <h1 style="font-size: 20px;">Bedankt${voornaam ? `, ${voornaam}` : ''}!</h1>
        <p>We hebben uw aanvraag ontvangen. Een van onze collega's neemt binnen 1 werkdag telefonisch contact met u op om samen te kijken naar de mogelijkheden.</p>
        <p>Heeft u ondertussen vragen? Reageer gerust op deze e-mail.</p>
        <p>Met vriendelijke groet,<br>Team Water-zuivering</p>
      </div>
    `,
  });

  return { success: !error, error };
}
