---
title: "Apple TV 4K – Komplett guide for hjemmekino"
description: "Slik setter du opp Apple TV 4K for best mulig bilde og lyd i hjemmekinoen. Innstillinger, tips og feilsøking."
date: 2025-01-15
draft: false
slug: "apple-tv-guide"
tags: ["Apple TV", "strømmeboks", "streaming", "4K", "Dolby Atmos"]
categories: ["Kilder & Streaming"]
image: "images/kilder/apple-tv-guide.jpg"
weight: 1
---

# Apple TV 4K – Komplett guide for hjemmekino

Apple TV 4K er en av de beste strømmeboksene for hjemmekino. Den støtter Dolby Vision, Dolby Atmos og HDR10+, har et raskt grensesnitt og god app-støtte. Her setter vi den opp optimalt.

## Hvem passer dette for?

Deg som har eller vurderer Apple TV 4K og vil sette den opp for best mulig bilde og lyd.

## Kortversjon

- Koble direkte til **AVR** for best lyd (eller via TV med eARC)
- Sett videoformat til **4K Dolby Vision, 60Hz**
- Aktiver **Match innhold** for dynamisk frekvens og HDR
- Sett lyd til **Dolby Atmos** (auto)
- Bruk **Ethernet** over Wi-Fi for stabilitet

## Tilkobling

### Anbefalt: Apple TV → AVR

```
Apple TV → HDMI → AVR → HDMI → TV
```

Gir best lydkvalitet – AVR-en dekoder Atmos direkte.

### Alternativ: Apple TV → TV → AVR via eARC

```
Apple TV → HDMI → TV → eARC → AVR
```

Fungerer hvis AVR-en mangler HDMI 2.1, eller for enklere oppsett. Krever at TV-en har eARC.

Les mer: [HDMI eARC-guide](/guide/hdmi-earc-guide/)

## Optimale innstillinger

### Video

Gå til Innstillinger → Video og lyd:

| Innstilling | Verdi |
|-------------|-------|
| **Format** | 4K Dolby Vision, 60Hz |
| **HDMI-utgang** | YCbCr 4:2:2 (eller Auto) |
| **Match innhold – Dynamisk område** | På |
| **Match innhold – Bildefrekvens** | På |
| **HDR-kalibrering** | Kjør med iPhone (iOS 14.5+) |

**Match innhold** er kritisk: det sørger for at Apple TV sender riktig HDR-format og bildefrekvens for hvert innhold, i stedet for å konvertere alt.

### Lyd

| Innstilling | Verdi |
|-------------|-------|
| **Lydformat** | Auto (Dolby Atmos aktivert) |
| **Lydutgang** | Auto |
| **Reduser høy lyd** | Av (med mindre du ser sent på kvelden) |
| **Navigasjonslyder** | Etter smak |

### Nettverkstips

- **Ethernet** anbefales sterkt over Wi-Fi for mest stabilt 4K-signal
- Nyere Apple TV 4K har Gigabit Ethernet innebygd (eller via USB-C-adapter på eldre)
- Wi-Fi 6 fungerer også bra med sterk signalstyrke

## HDR-kalibrering med iPhone

Apple TV har en unik funksjon: HDR-kalibrering med iPhone:

1. Hold en iPhone med Face ID (iPhone X eller nyere) med iOS 14.5+
2. Gå til Innstillinger → Video og lyd → Kalibrering
3. Hold telefonen mot TV-skjermen og følg instruksjonene
4. Apple TV justerer fargebalansen for din spesifikke TV

Dette gir en merkbar forbedring, spesielt for TV-er med dårlig fabrikkalibrering.

## Apper for hjemmekino

| App | 4K | HDR | Atmos |
|-----|-----|-----|-------|
| Apple TV+ | Ja | Dolby Vision | Ja |
| Netflix | Ja | Dolby Vision, HDR10 | Ja (DD+) |
| Disney+ | Ja | Dolby Vision, HDR10 | Ja (DD+) |
| HBO Max | Ja | Dolby Vision | Ja (DD+) |
| YouTube | Ja | HDR | Nei |
| Plex | Ja | Alle | Ja |

## Praktiske tips

- **AirPlay** lar deg caste fra iPhone, iPad eller Mac
- **HomePod** kan brukes som TV-høyttalere (men AVR er bedre for kino)
- **Infuse** er en utmerket alternativ mediespiller med bredere formatstøtte enn Plex
- Oppdater tvOS regelmessig for nye funksjoner og feilrettinger

## Vanlige feil

- Ikke aktiverer «Match innhold» (alt spilles i samme format, som kan se feil ut)
- Bruker Wi-Fi med svakt signal (buffring, dårlig kvalitet)
- Kobler Apple TV til TV i stedet for AVR (mister direkte Atmos-dekoding)
- Glemmer HDR-kalibrering med iPhone

## Neste steg

- [Streaming vs fysisk media](/nybegynner/streaming-vs-fysisk/) – Forstå kvalitetsforskjellene
- [HDMI eARC-guide](/guide/hdmi-earc-guide/) – Koble opp for best lyd
- [Plex-guide](/kilder-og-streaming/plex-guide/) – Eget mediebibliotek
- [Kalibrering av hjemmekino](/guide/kalibrering-av-hjemmekino/) – Optimaliser hele systemet
