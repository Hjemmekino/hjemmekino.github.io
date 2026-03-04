---
title: "Plex-guide – Bygg ditt eget mediebibliotek"
description: "Slik setter du opp Plex for hjemmekino. Server, klient, organisering og optimalisering av mediefiler."
date: 2025-01-15
draft: false
slug: "plex-guide"
tags: ["Plex", "mediasenter", "server", "streaming"]
categories: ["Kilder & Streaming"]
image: "images/kilder/plex-guide.jpg"
weight: 2
---

# Plex-guide – Bygg ditt eget mediebibliotek

Plex lar deg organisere og strømme ditt eget mediebibliotek til alle enheter. For hjemmekinoentusiaster gir det kombinasjonen av Blu-ray-kvalitet og strømmebekvemmelighet.

## Hvem passer dette for?

Deg som har en filmsamling (fysisk eller digital) og vil ha et ryddig, Netflix-lignende grensesnitt for å spille den av.

## Kortversjon

- Plex krever en **server** (PC, NAS, eller dedikert maskin) og en **klient** (Apple TV, Shield, smart-TV)
- Organisering etter **Plex-navnekonvensjon** er nøkkelen til gode metadata
- **Direkte avspilling** gir best kvalitet – unngå transkoding for hjemmekino
- Plex er gratis for grunnleggende bruk, Plex Pass gir ekstra funksjoner
- For best resultat: server med Ethernet, klient med Ethernet

## Hva er Plex?

Plex består av to deler:

1. **Plex Media Server** – kjører på en datamaskin/NAS og organiserer mediefilene dine
2. **Plex-klient** – appen du spiller av innhold på (TV, Apple TV, mobil, nettleser)

Serveren skanner mediemappene dine, henter metadata (omslag, beskrivelser, skuespillere) og presenterer alt i et pent grensesnitt.

## Slik setter du opp Plex

### Steg 1: Velg server

| Alternativ | Fordeler | Ulemper |
|-----------|---------|---------|
| **Gammel PC/laptop** | Rimelig, kraftig nok | Strøm, støy, plass |
| **NAS (Synology, QNAP)** | Alltid på, stille, kompakt | Begrenset transkodingsevne |
| **NVIDIA Shield Pro** | Kompakt, stille, god GPU | Begrenset lagring |
| **Dedikert mini-PC** | God ytelse, lite strøm | Krever litt oppsett |

For hjemmekino trenger du sjelden kraftig maskinvare – de fleste klienter kan spille 4K-filer direkte uten at serveren transkoder.

### Steg 2: Organiser filene

Plex er avhengig av riktig filstruktur for å hente metadata:

```
Filmer/
├── Blade Runner 2049 (2017)/
│   └── Blade Runner 2049 (2017).mkv
├── Dune Part Two (2024)/
│   └── Dune Part Two (2024).mkv
TV-serier/
├── Breaking Bad/
│   ├── Season 01/
│   │   ├── Breaking Bad - S01E01.mkv
│   │   └── Breaking Bad - S01E02.mkv
```

### Steg 3: Installer og konfigurer

1. Last ned Plex Media Server fra plex.tv
2. Opprett en Plex-konto
3. Legg til mediebiblioteker (Filmer, TV-serier, Musikk)
4. La Plex skanne og hente metadata

### Steg 4: Velg klient

For hjemmekino anbefaler vi klienter som støtter **direkte avspilling** av alle formater:

| Klient | 4K | HDR | Atmos | Direkte avspilling |
|--------|-----|-----|-------|-------------------|
| **Apple TV (Infuse)** | Ja | DV/HDR10 | Ja | Utmerket |
| **NVIDIA Shield Pro** | Ja | DV/HDR10 | Ja | Utmerket |
| **Apple TV (Plex-app)** | Ja | DV/HDR10 | Ja | Bra |
| **Smart-TV (Plex-app)** | Ja | Varierer | Varierer | Varierer |

**Infuse** (på Apple TV) er spesielt populært blant hjemmekinobrukere fordi den spiller nesten alle formater direkte uten transkoding.

## Direkte avspilling vs transkoding

- **Direkte avspilling (Direct Play)**: Filen sendes til klienten uten endring – best kvalitet
- **Direkte strømming (Direct Stream)**: Filen re-pakkes men ikke re-kodes – nesten like bra
- **Transkoding**: Serveren konverterer filen i sanntid – tap av kvalitet, krever kraftig server

**For hjemmekino**: Sørg for at klienten støtter filformatet direkte, slik at du alltid får direkte avspilling.

## Optimalisering for hjemmekino

### Nettverk

- **Ethernet** mellom server og klient er kritisk for 4K-filer (ofte 50–80 Mbps)
- Gigabit Ethernet er anbefalt
- Wi-Fi kan fungere med Wi-Fi 6 og godt signal, men Ethernet er tryggere

### Lydkonfigurasjon

- Sett klientens lydutgang til «Original» eller «Passthrough»
- Sjekk at Plex ikke transkoder lydspor (vanlig feil)
- Dolby TrueHD Atmos krever direkte avspilling – transkoding stripper Atmos

### Undertekster

- **SRT/ASS** (tekstbasert) transkoder ikke
- **PGS/SUP** (bildebasert, vanlig på Blu-ray-ripper) kan tvinge transkoding på noen klienter
- Foretrekk tekstbaserte undertekster for å unngå transkoding

## Sjekkliste

- [ ] Server valgt og installert
- [ ] Filer organisert etter Plex-standard
- [ ] Mediebibilioteker lagt til og skannet
- [ ] Klient installert og testet
- [ ] Nettverk er Ethernet (anbefalt)
- [ ] Lydutgang satt til passthrough
- [ ] 4K-avspilling testet uten buffring

## Vanlige feil

- Bruker Wi-Fi med svakt signal (buffring av 4K)
- Lar Plex transkode fordi klienten ikke støtter formatet
- Organiserer filer feil (Plex finner ikke metadata)
- Bruker PGS-undertekster som tvinger transkoding
- Glemmer å sette lyd til passthrough (mister Atmos)

## Neste steg

- [Streaming vs fysisk media](/nybegynner/streaming-vs-fysisk/) – Forstå kvalitetsforskjellene
- [Apple TV-guide](/kilder-og-streaming/apple-tv-guide/) – Optimal klient-oppsett
- [Forstå lyd og bilde](/nybegynner/forsta-lyd-og-bilde/) – Formater forklart
- [HDMI og tilkoblinger](/nybegynner/hdmi-og-tilkoblinger/) – Koble opp riktig
