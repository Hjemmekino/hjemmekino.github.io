---
title: "Høyttaler-kalibrering – Finjuster lydsystemet"
description: "Detaljert guide til kalibrering av høyttalere i hjemmekinoen. Nivåer, crossover, avstand og romkorreksjon."
date: 2025-01-15
draft: false
slug: "hoyttaler-kalibrering"
tags: ["kalibrering", "høyttalere", "AVR", "romkorreksjon"]
categories: ["Oppsett & Kalibrering"]
image: "images/oppsett/hoyttaler-kalibrering.jpg"
weight: 2
---

# Høyttaler-kalibrering – Finjuster lydsystemet

Automatisk kalibrering er et godt utgangspunkt, men manuell finjustering kan ta lyden til neste nivå. Her lærer du å evaluere og forbedre resultatene.

## Hvem passer dette for?

Deg som har kjørt automatisk kalibrering og vil finjustere for best mulig resultat.

## Kortversjon

- Start med **automatisk kalibrering** (Audyssey, YPAO, Dirac)
- **Verifiser** avstander, nivåer og crossover manuelt
- Juster **subwoofer +2–3 dB** for film
- Opprett **separate profiler** for film og musikk om AVR-en tillater det
- **Mål med REW** for å verifisere at kalibreringen fungerer

## Etter automatisk kalibrering

### Sjekk avstandsmålinger

AVR-en måler avstand i tid (forsinkelse), ikke fysisk avstand. Sjekk at verdiene er rimelige:

- Avvik opptil 30 cm fra fysisk avstand er normalt
- Store avvik (over 60 cm) kan indikere refleksjoner eller feil
- Subwoofer-avstanden kan avvike mye pga. elektronisk forsinkelse i subben

### Sjekk kanalnivåer

Bruk AVR-ens testtonegenerator og lytt:

1. Bytt mellom kanalene
2. Alle bør høres ut som **samme volum** fra lytteplassen
3. Juster ±1–2 dB om nødvendig

### Sjekk crossover-frekvenser

Automatisk kalibrering setter ofte crossover basert på høyttalernes fysiske størrelse:

- For de fleste er **80 Hz** riktig
- Små høyttalere: sett til **100–120 Hz**
- Store gulvhøyttalere: **60–80 Hz**
- Surroundhøyttalere: **80–120 Hz**

**Test**: Spill noe med jevn bass og lytt etter et «hull» mellom sub og høyttalere. Juster crossoveren opp/ned til overgangen er sømløs.

## Finjustering per bruk

### Filmprofil

- Subwoofer: +2–3 dB over kalibrert (mer kinoeffekt)
- Senter: +1 dB om dialog er utydelig
- Surround: Standard eller -1 dB
- Dynamisk omfang: Full
- Lydmodus: Auto/Direct

### Musikkprofil

- Subwoofer: Kalibrert nivå eller -1 dB (strammere bass)
- Stereo-modus eller «Pure Direct»
- Eventuelt deaktiver romkorreksjon for ren, uprøvd lyd
- Dynamisk omfang: Full

### Nattmodus

- Komprimert dynamikk (dialoger høyere, eksplosioner lavere)
- Subwoofer: -3 til -6 dB
- Senk totalvolumet
- Mange AVR-er har en dedikert nattmodus

## Avansert: EQ-justering

### Audyssey

- **Reference-modus**: Flat respons med høyfrekvent rulling (filmstandard)
- **Flat-modus**: Flat fra 20 Hz til 20 kHz
- **L/R Bypass**: Deaktiverer korreksjon for fronthøyttalerne (for HiFi-purister)
- **Audyssey-appen**: Gir mulighet til å justere målkurven manuelt

### Dirac Live

- Definer en **målkurve** (Harman-kurven er populær)
- Juster bassregionen separat
- Eksporter og importerer profiler

### YPAO

- **YPAO Volume** justerer tonekurven ved lavt volum (ligner loudness)
- Parametrisk EQ tilgjengelig for manuell justering

## Verifiser med måling

Bruk [REW (Room EQ Wizard)](/rom-og-akustikk/romkorreksjon-og-maling/) for å verifisere:

1. Mål **før** kalibrering (grunnlinje)
2. Mål **etter** automatisk kalibrering
3. Mål **etter** manuelle justeringer
4. Sammenlign kurvene

**Mål**: Jevnere frekvensrespons, spesielt i bassregionen (20–200 Hz).

## Sjekkliste

- [ ] Automatisk kalibrering kjørt
- [ ] Avstander verifisert
- [ ] Kanalnivåer sjekket med testtoner
- [ ] Crossover-frekvenser sjekket og justert
- [ ] Subwoofer-nivå finjustert for film
- [ ] Filmprofil opprettet
- [ ] Musikkprofil opprettet (valgfritt)
- [ ] Nattmodus konfigurert

## Vanlige feil

- Endrer alle innstillinger på en gang (gjør én endring av gangen)
- Stoler blindt på automatisk kalibrering uten å lytte
- Bruker musikk som referanse for filmkalibrering (ulike behov)
- Justerer EQ uten å forstå hva man endrer

## Neste steg

- [Kalibrering av hjemmekino](/guide/kalibrering-av-hjemmekino/) – Overordnet kalibreringsguide
- [Slik kalibrerer du subwoofer](/guide/slik-kalibrerer-du-subwoofer/) – Subwoofer-spesifikt
- [Romkorreksjon og måling](/rom-og-akustikk/romkorreksjon-og-maling/) – Avansert rommåling
- [AVR-oppsett](/oppsett-og-kalibrering/avr-oppsett/) – Grunnleggende AVR-konfigurasjon
