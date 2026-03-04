---
title: "HDR-kalibrering – Optimaliser HDR-bildet"
description: "Detaljert guide til HDR-kalibrering for TV og projektor. Tone mapping, lysstyrke og innstillinger for best HDR-opplevelse."
date: 2025-01-15
draft: false
slug: "hdr-kalibrering"
tags: ["HDR", "kalibrering", "bilde", "Dolby Vision"]
categories: ["Oppsett & Kalibrering"]
image: "images/oppsett/hdr-kalibrering.jpg"
weight: 3
---

# HDR-kalibrering – Optimaliser HDR-bildet

Denne guiden går dypere enn vår [HDR-innstillinger guide](/guide/hdr-innstillinger-guide/) og dekker kalibrering av tone mapping, fargeomfang og avanserte bildeinnstillinger.

## Hvem passer dette for?

Deg som vil ha det absolutt beste HDR-bildet fra TV-en eller projektoren.

## Kortversjon

- HDR-kalibrering er **separat** fra SDR-kalibrering – du trenger egne innstillinger
- **Baklys/OLED-lys på maks** for HDR
- **Tone mapping** er den viktigste HDR-innstillingen
- **Filmmaker Mode** er beste utgangspunkt
- **Dolby Vision** håndterer mye automatisk – la det jobbe

## Grunnleggende HDR-kalibrering

### Steg 1: Velg riktig inngangsmodusl

Sørg for at TV-en gjenkjenner HDR-signal:
- Sjekk at HDMI-porten er satt til «Enhanced»
- Verifiser at info-skjermen viser «HDR10», «Dolby Vision» el.l.

### Steg 2: Velg bildemodus

For HDR-innhold:
1. **Filmmaker Mode** (absolutt beste)
2. **Kino/Cinema HDR**
3. **ISF Dark** (for kalibrert rom)

### Steg 3: Sett baklys til maks

- **OLED Light**: 100 (maks)
- **Backlight**: Maks
- HDR-innhold er mastet for full lysstyrke – å redusere baklys dreper HDR-effekten

### Steg 4: Juster tone mapping

Tone mapping er hvordan TV-en komprimerer HDR-lysnivåer den ikke kan reprodusere:

**OLED-TV-er**: (topplysstyrke ca. 800–2000 nits, HDR-master opptil 4000–10 000 nits)
- Tone mapping **bør være på** – uten den mister du detaljer i lyse partier
- Noen TV-er kaller det «Dynamic Tone Mapping» eller «HDR Tone Mapping»

**Mini-LED-TV-er**: (topplysstyrke opptil 2000–4000 nits)
- Kan ofte ha tone mapping på lavere nivå eller av, avhengig av innhold
- Test med en referansefilm

### Steg 5: Deaktiver unødvendig prosessering

- Motion smoothing: **Av**
- Dynamisk kontrast: **Av** (i HDR – metadata kontrollerer kontrasten)
- Super Resolution / AI Upscaling: **Av** for 4K-innhold
- Støyreduksjon: **Av**

## Dolby Vision-kalibrering

Dolby Vision bruker dynamisk metadata og justerer seg automatisk scene for scene. Dine justeringsmuligheter er begrenset, men du kan:

1. Velge mellom **Dolby Vision Dark** og **Dolby Vision Bright**
2. La de fleste innstillinger stå på standard
3. Justere rombelysning – Dolby Vision fungerer best i mørkt rom

**Viktig**: Ikke overprøv Dolby Vision med egne EQ-justeringer – du ender med dårligere resultat.

## HDR10-kalibrering

HDR10 bruker statisk metadata og gir deg mer å jobbe med:

- **MaxCLL** (Maximum Content Light Level): Varierer per film
- **MaxFALL** (Maximum Frame Average Light Level): Varierer per film
- TV-en må balansere mellom å vise høylysene og beholde detaljer

### Kalibreringsverktøy

- **YouTube HDR-kalibreringsvideo** (søk «HDR calibration pattern»)
- **Spears & Munsil UHD HDR Benchmark** (Blu-ray, svært nøyaktig)
- **Apple TV HDR-kalibrering** (via iPhone)

Les mer: [Apple TV-guide](/kilder-og-streaming/apple-tv-guide/)

## Avanserte innstillinger

### Gamma/EOTF

HDR bruker **PQ (Perceptual Quantizer)** i stedet for tradisjonell gamma:
- La denne stå på «Auto» eller «PQ/ST.2084»
- Ikke juster gamma manuelt for HDR-innhold

### Fargeomfang

HDR bruker BT.2020 (Rec. 2020) fargerom:
- Sett til **Auto** eller **BT.2020**
- Ikke bruk «Normal» eller «Standard» – det begrenser fargeomfanget

### Svarthevning (Black Level / HDMI Range)

- Sett til **Auto** eller **Low** (begrenset/limited range)
- «High» (full range) kan gi for lyse svarte partier

## Referansefilmer for HDR-testing

Gode filmer for å evaluere HDR-innstillinger:

- **Blade Runner 2049** – Mørke scener med sterke lyskilder
- **Mad Max: Fury Road** – Intense farger og kontrast
- **Planet Earth II** – Naturtro farger og detaljer
- **Dunkirk** – IMAX-scener med dynamisk kontrast
- **Guardians of the Galaxy Vol. 2** – Neon og partikkeleffekter

## Sjekkliste

- [ ] HDMI Enhanced Signal aktivert
- [ ] HDR gjenkjent av TV-en
- [ ] Filmmaker Mode eller Kino valgt
- [ ] Baklys/OLED-lys på maks
- [ ] Tone mapping konfigurert
- [ ] Motion smoothing av
- [ ] Dynamisk kontrast av
- [ ] Fargeomfang satt til Auto/BT.2020
- [ ] Testet med referansefilm

## Vanlige feil

- Bruker SDR-innstillinger for HDR (de trenger separate profiler)
- Reduserer baklys i HDR (fjerner HDR-effekten)
- Har dynamisk kontrast på i HDR-modus
- Glemmer å aktivere Enhanced HDMI-signal
- Overstyrer Dolby Vision med egne justeringer

## Neste steg

- [HDR-innstillinger guide](/guide/hdr-innstillinger-guide/) – Grunnleggende HDR-oppsett
- [Kalibrering av hjemmekino](/guide/kalibrering-av-hjemmekino/) – Komplett kalibreringsguide
- [OLED vs Mini-LED](/tv-og-projektor/oled-vs-mini-led/) – Panelforskjeller for HDR
- [Bildeformat og sideforhold](/guide/bildeformat-og-sideforhold/) – Forstå formater
