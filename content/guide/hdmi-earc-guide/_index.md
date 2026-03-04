---
title: "HDMI eARC-guide – Slik setter du opp eARC riktig"
description: "Alt om HDMI eARC for hjemmekino. Slik kobler du opp, feilsøker og får full lydkvalitet fra TV til forsterker."
date: 2025-01-15
draft: false
slug: "hdmi-earc-guide"
tags: ["HDMI", "eARC", "ARC", "guide", "tilkoblinger"]
categories: ["Guider"]
image: "images/guide/hdmi-earc.jpg"
weight: 3
---

# HDMI eARC-guide – Slik setter du opp eARC riktig

eARC (Enhanced Audio Return Channel) er nøkkelen til å få full lydkvalitet fra TV-ens apper til din AV-receiver eller soundbar. Denne guiden forklarer alt du trenger å vite.

## Hvem passer dette for?

Deg som bruker TV-ens innebygde strømmeapper og vil ha best mulig lyd gjennom et eksternt lydsystem.

## Kortversjon

- eARC sender tapsfri surroundlyd (Atmos, TrueHD, DTS-HD MA) fra TV til AVR
- Bruk HDMI-porten merket **eARC** på både TV og AVR
- Krever **Ultra High Speed** eller **Premium High Speed HDMI-kabel**
- Aktiver eARC i innstillingene på **både** TV og AVR
- Fungerer ikke? Sjekk [feilsøkingen](#feilsøking) nederst

## Hva er eARC?

ARC (Audio Return Channel) ble introdusert med HDMI 1.4 og lar TV-en sende lyd *tilbake* til AVR-en via HDMI-kabelen – uten behov for separat lydkabel.

eARC er den forbedrede versjonen (HDMI 2.1) med mye høyere båndbredde:

| Egenskap | ARC | eARC |
|----------|-----|------|
| Båndbredde | ~1 Mbps | ~37 Mbps |
| Dolby Digital 5.1 | Ja | Ja |
| Dolby Digital Plus / Atmos (DD+) | Ja | Ja |
| Dolby TrueHD | Nei | Ja |
| Dolby TrueHD Atmos | Nei | Ja |
| DTS-HD Master Audio | Nei | Ja |
| DTS:X | Nei | Ja |
| 7.1 PCM | Nei | Ja |

## Når trenger du eARC?

Du trenger eARC hvis:

- Du bruker TV-ens innebygde apper (Netflix, Disney+) og vil ha Atmos via TrueHD
- Du spiller 4K Blu-ray direkte i en spiller koblet til TV-en
- Du vil ha tapsfri lydoverføring fra TV til AVR

Du trenger **ikke** eARC hvis:

- Alle kilder (strømmeboks, konsoll, Blu-ray) er koblet direkte til AVR-en
- Du kun bruker soundbar med Dolby Digital Plus (ARC er tilstrekkelig)

## Slik setter du opp eARC

### Steg 1: Identifiser riktige porter

(Bildeidé: Nærbilde av TV-bakside med eARC-port markert)

- **TV**: Se etter porten merket «eARC» eller «ARC» (vanligvis HDMI 2)
- **AVR/soundbar**: Se etter porten merket «HDMI OUT (eARC)» eller «MONITOR»

### Steg 2: Bruk riktig kabel

- For eARC anbefales **Ultra High Speed HDMI-kabel** (HDMI 2.1)
- Premium High Speed kan fungere for eARC, men Ultra High Speed garanterer kompatibilitet
- Unngå kabler over 3 meter med mindre det er en aktiv kabel

### Steg 3: Koble opp

```
TV [eARC-port] ←→ [HDMI OUT/eARC] AVR/soundbar
```

### Steg 4: Aktiver eARC i TV-en

Prosessen varierer etter merke:

**LG (webOS)**:
1. Innstillinger → Lyd → Lydutgang → HDMI ARC
2. Innstillinger → Lyd → Avansert → eARC-støtte → På

**Samsung (Tizen/One UI)**:
1. Innstillinger → Lyd → Lydutgang → Receiver (HDMI)
2. Innstillinger → Generelt → Ekstern enhetsbehandling → Anynet+ (HDMI-CEC) → På

**Sony (Google TV)**:
1. Innstillinger → Skjerm og lyd → Lydutgang → eARC-modus → Auto
2. Innstillinger → Bravia Sync → På

### Steg 5: Konfigurer AVR-en

- Sett HDMI-utgang til eARC-modus
- Aktiver CEC/kontroll
- Sett lyd-inngang til «TV Audio» eller «eARC»

### Steg 6: Test

1. Spill Atmos-innhold fra en av TV-ens apper
2. Sjekk AVR-ens display – det bør vise «Dolby Atmos», «TrueHD» eller lignende
3. Verifiser at lyd kommer fra alle høyttalere

## Feilsøking

### Ingen lyd via eARC

1. Sjekk at begge enheter har eARC aktivert
2. Prøv en annen HDMI-kabel
3. Oppdater firmware på både TV og AVR
4. Slå av begge enheter, trekk ut strømkablene i 30 sekunder, start på nytt

### Lyd via eARC, men bare stereo

1. Sjekk at TV-ens lydutgang er satt til «Auto» eller «Bitstream»
2. Sjekk at appen støtter surroundlyd (se etter Atmos-ikonet)
3. Kontroller at AVR-en er satt til riktig inngang

### eARC kobler seg av og på

1. Deaktiver CEC på enheter du ikke bruker
2. Oppdater firmware
3. Prøv å koble fra andre HDMI-enheter for å isolere problemet

Les mer: [Feilsøking: Ingen lyd via HDMI](/feilsoking/ingen-lyd-hdmi/)

## Praktiske tips

- Merk eARC-kabelen slik at du vet hvilken det er
- Hold firmware oppdatert på alle enheter
- Bruk CEC sparsomt – for mange CEC-enheter kan skape konflikter
- Hvis du opplever lip sync-problemer, sjekk AVR-ens synkroniseringsinnstilling

## Vanlige feil

- Kobler til feil HDMI-port (ikke alle porter støtter eARC)
- Bruker en gammel HDMI-kabel som ikke støtter eARC
- Glemmer å aktivere eARC i TV-ens innstillinger
- Setter TV-ens lydutgang til «PCM» i stedet for «Bitstream/Auto»

## Neste steg

- [HDMI og tilkoblinger](/nybegynner/hdmi-og-tilkoblinger/) – Grunnleggende om HDMI
- [Forsterker og AVR](/lyd/forsterker-og-avr/) – Velg riktig forsterker
- [Feilsøking: HDMI-handshake](/feilsoking/hdmi-handshake-feil/) – Løs signalproblemer
- [Kalibrering av hjemmekino](/guide/kalibrering-av-hjemmekino/) – Optimaliser etter oppsett
