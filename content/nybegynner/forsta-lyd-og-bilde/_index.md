---
title: "Forstå lyd og bilde – Formater og kodeker"
description: "Grunnleggende om lyd- og bildeformater for hjemmekino. Dolby Atmos, DTS:X, HDR, Dolby Vision og mer forklart."
date: 2025-01-15
draft: false
slug: "forsta-lyd-og-bilde"
tags: ["nybegynner", "lydformater", "bildeformater", "HDR", "Dolby Atmos"]
categories: ["Nybegynner"]
image: "images/nybegynner/lyd-og-bilde-formater.jpg"
weight: 4
---

# Forstå lyd og bilde – Formater og kodeker

Hjemmekinoverdenen er full av forkortelser og formater. Her forklarer vi de viktigste, slik at du vet hva du skal se etter.

## Hvem passer dette for?

Deg som ser begreper som «Dolby Atmos», «HDR10+» og «eARC» og lurer på hva det betyr i praksis.

## Kortversjon

- **Bildeformater**: HDR10 (standard), Dolby Vision (best), HDR10+ (Samsung)
- **Lydformater**: Stereo → 5.1 → 7.1 → Atmos/DTS:X (objektbasert 3D-lyd)
- **Viktigst**: Sørg for at hele kjeden (kilde → kabel → forsterker → skjerm) støtter formatene du vil bruke
- Sjekk [ordlisten](/ordliste/) for begreper du lurer på

## Bildeformater

### Oppløsning

- **Full HD (1080p)** – 1920 × 1080 piksler. Fortsatt vanlig for strømming og TV-sendinger
- **4K / UHD (2160p)** – 3840 × 2160 piksler. Dagens standard for hjemmekino
- **8K (4320p)** – 7680 × 4320 piksler. Svært lite innhold tilgjengelig, unødvendig for de fleste

### HDR (High Dynamic Range)

HDR gir bredere kontrastomfang og flere farger enn standard SDR-bilde. Det er en av de viktigste forbedringene for bildekvalitet.

| Format | Beskrivelse | Hvem bruker det? |
|--------|-------------|-----------------|
| **HDR10** | Åpen standard, statisk metadata | Alle HDR-TV-er |
| **HDR10+** | Dynamisk metadata, åpen standard | Samsung, Amazon |
| **Dolby Vision** | Dynamisk metadata, lisensiert | LG, Sony, Apple TV+ |
| **HLG** | For TV-sendinger | NRK, BBC |

**Dynamisk vs statisk metadata**: Statisk (HDR10) bruker samme innstillinger for hele filmen. Dynamisk (Dolby Vision, HDR10+) justerer scene for scene – noe som gir bedre resultat i scener med stor kontrastvariasjon.

Les mer: [HDR-innstillinger guide](/guide/hdr-innstillinger-guide/)

### Bildefrekvens

- **24 fps** – Kinostandard for film
- **30/25 fps** – Vanlig for TV-sendinger
- **60/50 fps** – Sport og noe strømmeinnhold
- **120 fps** – Spill (krever HDMI 2.1)

### Bildeformat og sideforhold

Filmer bruker forskjellige sideforhold. De vanligste er:

- **16:9** – Standard TV-format
- **21:9 (2.35:1/2.39:1)** – Bredt kinoformat (svarte striper over/under)
- **IMAX (1.43:1 / 1.90:1)** – Høyere bilde, fyller mer av skjermen

Les mer: [Bildeformat og sideforhold](/guide/bildeformat-og-sideforhold/)

## Lydformater

### Kanaler forklart

Tallene i «5.1» og «7.1.4» betyr:

- **Første tall**: Antall hovedhøyttalere (front, senter, surround)
- **Andre tall**: Antall subwoofere
- **Tredje tall** (valgfritt): Antall høydehøyttalere (Atmos/DTS:X)

Eksempler:
- **2.0** = Stereo (to høyttalere, ingen sub)
- **5.1** = Fem høyttalere + én subwoofer
- **7.1.4** = Syv høyttalere + én sub + fire takhøyttalere

### Surroundformater

| Format | Type | Kanaler | Beskrivelse |
|--------|------|---------|-------------|
| **Dolby Digital** | Kanalbasert | Opp til 5.1 | Grunnleggende surround, standard på DVD og TV |
| **DTS** | Kanalbasert | Opp til 5.1 | Konkurrent til Dolby Digital |
| **Dolby TrueHD** | Tapsfri | Opp til 7.1 | Blu-ray-kvalitet, identisk med studio |
| **DTS-HD MA** | Tapsfri | Opp til 7.1 | Tapsfri DTS, brukt på Blu-ray |
| **Dolby Atmos** | Objektbasert | Opp til 7.1.4+ | 3D-lyd med høydeinformasjon |
| **DTS:X** | Objektbasert | Opp til 7.1.4+ | Konkurrent til Atmos |

### Hva betyr «objektbasert lyd»?

Tradisjonell surround sender lyd til faste kanaler (venstre surround, høyre surround, osv.). Objektbasert lyd (Atmos, DTS:X) plasserer lydobjekter i et 3D-rom. AVR-en beregner så hvilke høyttalere som skal spille hva, basert på ditt oppsett.

**Fordel**: Filmen tilpasser seg automatisk til ditt høyttaleroppsett, enten du har 5.1.2 eller 9.1.6.

### Lydkodeker for strømming

Strømmetjenester bruker komprimerte formater:

- **Dolby Digital Plus (DD+)** – Netflix, Disney+, Apple TV+ (standard)
- **Dolby Atmos via DD+** – Netflix, Disney+, Apple TV+ (Atmos over strømming)
- **Stereo AAC** – Fallback for de fleste tjenester

Merk: Strømmekvaliteten er alltid lavere enn Blu-ray. For best lydkvalitet bruker du fysisk media.

## Hele kjeden må støtte formatet

Et vanlig problem: du har en TV med Dolby Vision, men bildet vises ikke i Dolby Vision. Årsaken er ofte at én komponent i kjeden ikke støtter formatet.

**Signalkjeden for bilde**: Kilde → HDMI-kabel → (AVR) → HDMI-kabel → TV

**Signalkjeden for lyd**: Kilde → HDMI-kabel → AVR → høyttalere

Sjekkliste:
- Støtter kilden (Apple TV, Blu-ray) formatet?
- Er HDMI-kabelen rask nok? (Ultra High Speed for 4K/120Hz)
- Støtter AVR-en passthrough av formatet?
- Støtter TV-en formatet?

## Praktiske tips

- Sjekk alltid at HDMI-kabelen støtter det du trenger – men ikke betal premium
- Aktiver «passthrough» i AVR-en for lydformater
- Sett strømmetjenester til «best quality» eller «auto» i innstillinger
- Test med kjent innhold: søk opp «Dolby Atmos demo» på tjenesten din

## Vanlige feil

- Bruker optisk kabel i stedet for HDMI (optisk støtter ikke Atmos)
- Har TV-ens interne app som kilde uten å sjekke om den støtter Atmos
- Forveksler «Dolby Atmos» med «Dolby Digital» – det er stor forskjell
- Tror at høyere oppløsning alltid betyr bedre bilde (HDR betyr mer enn 4K vs 8K)

## Neste steg

- [HDMI og tilkoblinger](/nybegynner/hdmi-og-tilkoblinger/) – Alt om kabler og porter
- [HDR-innstillinger guide](/guide/hdr-innstillinger-guide/) – Konfigurer HDR riktig
- [Slik setter du opp surround](/guide/slik-setter-du-opp-surround/) – Kom i gang med surroundlyd
- [Ordliste](/ordliste/) – Alle begreper forklart
