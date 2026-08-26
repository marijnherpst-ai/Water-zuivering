# Facebook/Instagram Ads — Water-zuivering

Klaar-om-te-plakken advertentieteksten voor Meta Ads Manager, gericht op de
besparingscalculator-funnel (`/besparing`). Vervang `<JOUW-DOMEIN>` overal door
je echte domein voordat je uploadt.

## Campagne-instellingen (aanbevolen)

- **Doelstelling:** Leads (of "Verkoop" met conversielocatie Website — beide werken)
- **Conversielocatie:** Website
- **Pixel:** bestaand event `901866625752558`
- **Optimalisatie-event:** `Lead` — vuurt nu op zowel `/aanmelden`, het contactformulier
  als de besparingscalculator (net toegevoegd, zie `components/Calculator.js`)
- **Bestemmings-URL:** `https://<JOUW-DOMEIN>/besparing?utm_source=facebook&utm_medium=paid_social&utm_campaign={{campaign.name}}&utm_content={{ad.name}}`
- **CTA-knop:** "Meer informatie" of "Offerte aanvragen" (laatste alleen beschikbaar bij Leads-doelstelling)

## Creative-specs

| Formaat | Afmeting | Gebruik |
|---|---|---|
| Feed (1:1) | 1080×1080 | Facebook/Instagram feed |
| Feed (4:5) | 1080×1350 | Instagram feed, neemt meer schermruimte in |
| Stories/Reels (9:16) | 1080×1920 | Instagram/FB Stories, Reels |

Bestaande productfoto's in `public/assets/img/` zijn niet vierkant/verticaal
gecropt. Zeg het als je wilt dat ik er met de banner-design skill
geschikte 1:1 / 4:5 / 9:16 varianten van laat maken — dan hoef je in Ads
Manager alleen te uploaden.

---

## Advertentie 1 — Besparing (hoofdhoek)

**Primaire tekst:**
```
Flessenwater is duurder dan je denkt 💧

Gemiddeld Nederlands gezin geeft honderden euro's per jaar uit aan
flessenwater. Met een Water-zuivering waterzuiveraar onder je kraan
drink je altijd vers, gefilterd water — voor een fractie van de prijs.

Bereken in 1 minuut hoeveel jij bespaart.
```
**Kop:** Bereken je waterbesparing
**Beschrijving:** Gratis en vrijblijvend
**CTA:** Meer informatie
**Creative:** `public/assets/img/glas-water.webp` of `countertop.png`
**Bestemming:** `/besparing`

---

## Advertentie 2 — Gezondheid & zuiverheid

**Primaire tekst:**
```
Wat zit er nou echt in je kraanwater? 🚰

Chloor, PFAS, medicijnresten, microplastics, lood — allemaal stoffen die
een Water-zuivering waterzuiveraar er met 3 filtertrappen uithaalt.
Puur, gezond water. Rechtstreeks uit je eigen kraan.

Vraag een gratis en vrijblijvende offerte aan.
```
**Kop:** Puur water, geen zorgen
**Beschrijving:** 3 filtertrappen, 10 jaar garantie
**CTA:** Offerte aanvragen
**Creative:** `public/assets/img/filters-closeup.png` of `mineraalfilter.jpg`
**Bestemming:** `/besparing`

---

## Advertentie 3 — Gemak (geen flessen sjouwen)

**Primaire tekst:**
```
Nooit meer kratten water sjouwen 📦➡️🚫

Altijd vers, gefilterd water beschikbaar — 24/7, direct uit je kraan.
Compact geïnstalleerd in je keukenkastje, geen ruimte kwijt op je
aanrecht.

Bereken hier wat het jou oplevert.
```
**Kop:** Vers water, zonder gedoe
**Beschrijving:** Compact geïnstalleerd, altijd beschikbaar
**CTA:** Meer informatie
**Creative:** `public/assets/img/cabinet-install.png` of `systeem-slim-105mm.png`
**Bestemming:** `/besparing`

---

## Advertentie 4 — Vertrouwen & garantie (social proof)

**Primaire tekst:**
```
Al [X] tevreden klanten gingen je voor ⭐⭐⭐⭐⭐

Vakkundige installatie door onze eigen monteurs, Nederlandse service en
10 jaar garantie op elk systeem. Geen verrassingen achteraf.

Reken uit wat een Water-zuivering systeem jou bespaart.
```
**Kop:** 10 jaar garantie, geen zorgen
**Beschrijving:** Nederlandse service & installatie
**CTA:** Meer informatie
**Creative:** `public/assets/img/klantenservice.jpg` of een screenshot van de
sterrenbeoordeling op de homepage
**Bestemming:** `/besparing`

> Vul `[X]` in met het actuele aantal reviews (zie sterrenbalk op de homepage) —
> gebruik geen los getal totdat je het echte aantal hebt gecontroleerd.

---

## Nog te doen voor je live gaat

1. Vervang `<JOUW-DOMEIN>` door je echte domein in alle bestemmings-URL's.
2. Vul `[X]` in advertentie 4 in met het actuele reviewaantal.
3. Zeg het als je wilt dat ik de bestaande productfoto's laat verwerken tot
   1:1 / 4:5 / 9:16 creatives (banner-design skill) in plaats van de ruwe
   foto's te uploaden.
4. Test de `/besparing`-flow één keer end-to-end en controleer in
   Meta Events Manager (Test Events) dat het `Lead`-event binnenkomt.
