# Facebook/Instagram Ads — 5 nieuwe testvarianten

Doel: 5 verschillende hoeks testen tegen de bestaande 4 advertenties uit de
`Facebook Ads Water-zuivering`-map (die dekken al: sfeerbeeld/installatie,
gemak/geen-flessen-sjouwen, compact product/garantie, gezondheid/zomeractie).
Deze 5 zijn nieuwe, niet-overlappende hoeks.

**Grounding:** prijzen komen uit `components/Calculator.js` (WATER_BRANDS),
reviewcijfers en het citaat komen live uit de Supabase `reviews`-tabel
(37 goedgekeurde reviews, gemiddeld 4,7/5 — opgehaald op 2026-08-06). Geen
verzonnen cijfers of testimonials.

Alle teksten zijn tegen de Meta-specs gevalideerd (kop ≤ 40 tekens,
beschrijving ≤ 30 tekens, hook van de primaire tekst past in het
zichtbare venster van ~125 tekens vóór "meer weergeven").

---

## Ad A — Besparingsrekenmodel

**Primaire tekst** (209 tekens):
```
Flessenwater kost al snel €0,30–€0,85 per liter. Gefilterd kraanwater?
Circa €0,05. Bereken in 1 minuut wat jij bespaart met een Water-zuivering
waterzuiveraar — en profiteer nu van €250 korting op je offerte.
```
**Kop (27):** Bereken jouw waterbesparing
**Beschrijving (22):** Vrijblijvend en gratis
**CTA:** Meer informatie
**Bestemming:** `/besparing`
**Visual-richting:** rekenmachine/cijfers-georiënteerd — bv. een simpele
grafiek of "€X per jaar"-uitlichting, amber accent op het bedrag.

---

## Ad B — Social proof (echte review)

**Primaire tekst** (229 tekens):
```
"Wij drinken thuis veel meer water sinds we deze oplossing hebben. Vooral
mijn kinderen pakken nu sneller een glas water." — Laura van Dijk,
Groningen. 4,7/5 sterren op basis van 37 reviews. Nu €250 korting bij je
offerte-aanvraag.
```
**Kop (25):** 4,7/5 sterren, 37 reviews
**Beschrijving (29):** Nu €250 korting op je offerte
**CTA:** Offerte aanvragen
**Bestemming:** `/aanmelden`
**Visual-richting:** sterrenbeoordeling + kort citaat als grafisch element,
of een quote-card in huisstijl (amber/ink).

> Vervang het citaat/cijfer als het reviewaantal wijzigt — dit is een
> live snapshot, geen vast gegeven.

---

## Ad C — Milieu & duurzaamheid

**Primaire tekst** (263 tekens):
```
Een gemiddeld Nederlands gezin verbruikt honderden plastic waterflessen
per jaar. Met een waterzuiveraar onder je kraan drink je zuiver water
zonder al dat plastic afval — beter voor je portemonnee en het milieu.
Nu €250 korting bij het aanvragen van een offerte.
```
**Kop (28):** Minder plastic, zuiver water
**Beschrijving (25):** Goed voor milieu en beurs
**CTA:** Meer informatie
**Bestemming:** `/aanmelden`
**Visual-richting:** contrast-beeld (stapel plastic flessen vs. één
compact systeem), of een simpel "0 flessen"-icoon zoals al op de site
gebruikt wordt.

---

## Ad D — Prijsvergelijking flessenwater vs. kraanwater

**Primaire tekst** (212 tekens):
```
Spa Blauw: €0,79/liter. Sourcy: €0,67/liter. Huismerk: €0,30/liter.
Gefilterd kraanwater met Water-zuivering: circa €0,05/liter. Zelfde
puurheid, veel lagere prijs — en geen flessen sjouwen. Bereken je
besparing.
```
**Kop (24):** €0,05/liter i.p.v. €0,79
**Beschrijving (27):** Bekijk de prijsvergelijking
**CTA:** Meer informatie
**Bestemming:** `/besparing`
**Visual-richting:** letterlijke prijsvergelijkingstabel/-grafiek, merken
naast elkaar met kraanwater duidelijk lager.

---

## Ad E — Twijfelaars / bezwaren wegnemen (FAQ-stijl)

**Primaire tekst** (224 tekens):
```
Twijfel je nog? "Is het niet duur?" Met €250 korting valt dat vaak mee.
"Is de installatie ingewikkeld?" Onze eigen monteurs regelen het compleet.
"Wat als er iets stuk gaat?" 10 jaar garantie. Vraag een vrijblijvende
offerte aan.
```
**Kop (29):** Twijfels? Wij beantwoorden ze
**Beschrijving (16):** 10 jaar garantie
**CTA:** Offerte aanvragen
**Bestemming:** `/aanmelden`
**Visual-richting:** vraag/antwoord-kaartjes (3 korte bezwaren + antwoord),
rustige lay-out, geen aftelklok of schaarste-trucjes.

---

## Nog te doen

1. **Visuals** — voor geen van deze 5 bestaat al een creative. Zeg het als
   je wilt dat ik ze laat ontwerpen (1:1 + 4:5, huisstijl amber/ink/Outfit)
   met de banner-design of image-skill.
2. **A/B-opzet** — met 9 advertenties totaal (4 bestaand + 5 nieuw) is het
   verstandig ze over 2-3 advertentiesets te verdelen i.p.v. alles in één
   set, zodat Meta's leeralgoritme genoeg budget per advertentie krijgt.
   Wil je dat ik een indeling voorstel?
3. Zodra de Chrome-verbinding met Meta Ads Manager werkt, kan ik dit
   klaarzetten (niet publiceren — dat doe jij als laatste stap).
