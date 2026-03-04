---
title: "AVR-oppsett – Konfigurer AV-receiveren riktig"
description: "Detaljert guide til oppsett av AV-receiver. HDMI, høyttalerkonfigurasjon, bass management og lydmodus."
date: 2025-01-15
draft: false
slug: "avr-oppsett"
tags: ["AVR", "oppsett", "konfigurering", "bass management"]
categories: ["Oppsett & Kalibrering"]
image: "images/oppsett/avr-oppsett.jpg"
weight: 1
---

# AVR-oppsett – Konfigurer AV-receiveren riktig

En AV-receiver har hundrevis av innstillinger. De viktigste er overraskende få. Her fokuserer vi på det som faktisk påvirker opplevelsen.

## Hvem passer dette for?

Deg som har en ny (eller ny-for-deg) AVR og vil konfigurere den optimalt.

## Kortversjon

- Kjør **oppsettveiviseren** først – den dekker det meste
- Sett alle høyttalere til **«Small»** med subwoofer
- Sett **crossover til 80 Hz** som standard
- Aktiver **eARC** og **CEC**
- Kjør **automatisk kalibrering**, deretter finjuster

## Første oppsett

### Steg 1: Oppsettveiviser

De fleste moderne AVR-er har en veiviser ved første oppstart. Følg den – den konfigurerer:

- Høyttalerantall og layout
- HDMI-tilkoblinger
- Nettverksoppsett
- Grunnleggende kalibrering

### Steg 2: HDMI-konfigurasjon

- **HDMI-utgangen** til TV bør bruke **eARC-porten**
- Aktiver **4K Enhanced / 8K Signal** på relevante innganger
- Sett **HDMI Control (CEC)** til På
- Aktiver **Passthrough** for at AVR-en sender signal til TV når den er av

### Steg 3: Høyttalerkonfigurasjon

#### Small vs Large

Sett **alle** høyttalere til **«Small»** når du har subwoofer. Dette sender alle dype bassfrekvenser til subwooferen, som er spesialdesignet for det.

**Unntak**: Hvis du ikke har subwoofer, sett fronthøyttalerne til «Large» (men da mister du dybeste bassen).

#### Crossover-frekvenser

Crossoveren bestemmer hvor bassen deles mellom høyttalere og subwoofer:

| Høyttalertype | Anbefalt crossover |
|--------------|-------------------|
| Store gulvhøyttalere | 60–80 Hz |
| Mellomstore bokhyller | 80–100 Hz |
| Små kompakthøyttalere | 100–120 Hz |
| Surroundhøyttalere | 80–120 Hz |
| Atmos-høyttalere | 100–150 Hz |

**80 Hz er Dolby/THX-standard** og fungerer for de fleste systemer. Test og juster etter ørene.

#### Subwoofer-modus

- **LFE + Main**: Sender bass til både sub og høyttalere (kan gi for mye bass)
- **LFE**: Kun subwooferen spiller bass under crossoveren (anbefalt)

### Steg 4: Avstandsinnstillinger

AVR-en bruker avstand fra lytteplass til hver høyttaler for å justere tidsforsinkelser. Automatisk kalibrering setter dette, men du kan verifisere:

- Mål avstanden fra lytteplass til hver høyttaler
- Sammenlign med AVR-ens verdier
- Avvik over 30 cm bør justeres manuelt

### Steg 5: Kanalnivåer

Etter automatisk kalibrering, finjuster:

- **Senterhøyttaler**: +1–2 dB om dialog er vanskelig å høre
- **Subwoofer**: +2–3 dB over kalibrert nivå for kinoopplevelse
- **Surround**: Senk 1–2 dB om effektene er for påtrengende

## Lydmoduser

AVR-en har mange lydmoduser. Her er de viktigste:

| Modus | Bruk for |
|-------|---------|
| **Auto/Direct** | Spill originalt format uendret |
| **Dolby Surround** | Upmix stereo/5.1 til alle høyttalere |
| **DTS Neural:X** | Upmix stereo/5.1 til alle høyttalere |
| **Stereo** | Tvungen stereo (for musikk) |
| **Pure Direct** | Korteste signalvei, ingen prosessering |

**Anbefaling**: Bruk **Auto/Direct** for film (spiller originalformatet) og **Dolby Surround/DTS Neural:X** for innhold som ikke har native surround.

## Nettverksoppsett

- Koble til **Ethernet** for stabilt nettverk
- Registrer AVR-en hos produsenten for firmware-oppdateringer
- Oppdater firmware – det løser ofte bugs og legger til funksjoner
- Konfigurer strømmetjenester (Spotify Connect, AirPlay, etc.)

## Sjekkliste

- [ ] Oppsettveiviser kjørt
- [ ] eARC aktivert
- [ ] CEC/kontroll aktivert
- [ ] Alle høyttalere satt til «Small» (med sub)
- [ ] Crossover satt (80 Hz standard)
- [ ] Subwoofer-modus satt til LFE
- [ ] Automatisk kalibrering kjørt
- [ ] Kanalnivåer finjustert
- [ ] Firmware oppdatert
- [ ] HDMI Enhanced Signal aktivert

## Vanlige feil

- Setter høyttalere til «Large» med subwoofer (dupliserer bass)
- Bruker «LFE + Main» (for mye bass)
- Glemmer å aktivere eARC
- Aldri oppdaterer firmware
- Bruker «Surround»-modus for alt i stedet for «Auto/Direct»

## Neste steg

- [Kalibrering av hjemmekino](/guide/kalibrering-av-hjemmekino/) – Komplett kalibrering
- [Høyttaler-kalibrering](/oppsett-og-kalibrering/hoyttaler-kalibrering/) – Finjuster lyd
- [HDMI eARC-guide](/guide/hdmi-earc-guide/) – Tilkoblingsdetaljer
- [Forsterker og AVR](/lyd/forsterker-og-avr/) – Velg riktig AVR
