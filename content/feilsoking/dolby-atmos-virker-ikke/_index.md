---
title: "Dolby Atmos virker ikke – Slik fikser du det"
description: "Feilsøking for Dolby Atmos i hjemmekino. Sjekk signalkjede, innstillinger og kompatibilitet."
date: 2025-01-15
draft: false
slug: "dolby-atmos-virker-ikke"
tags: ["feilsøking", "Dolby Atmos", "surround", "lyd"]
categories: ["Feilsøking"]
image: "images/feilsoking/dolby-atmos.jpg"
weight: 5
---

# Dolby Atmos virker ikke – Slik fikser du det

Du har Atmos-høyttalere, Atmos-innhold og en Atmos-AVR – men AVR-en viser bare «Dolby Digital» eller «Dolby Digital Plus». Her finner og fikser du problemet.

## Hurtigløsning

1. **Sjekk AVR-ens display** – hva viser den? (Dolby Digital, DD+, TrueHD, Atmos?)
2. **Sjekk innholdet** – har det faktisk Atmos? (Se etter Atmos-ikon i appen)
3. **Sjekk kildens lydinnstillinger** – sett til «Bitstream» (ikke PCM)
4. **Sjekk tilkoblingen** – er kilden koblet direkte til AVR via HDMI?

## Signalkjeden for Atmos

Hele kjeden må støtte Atmos for at det skal fungere:

```
Innhold med Atmos
    ↓
Kilde (strømmeboks/Blu-ray) med Atmos-støtte
    ↓ HDMI
AVR med Atmos-dekoding
    ↓
Høyttalere (inkludert høydehøyttalere)
```

Svikt i **ett eneste ledd** betyr at Atmos ikke fungerer.

## Vanlige årsaker og løsninger

### Kildens lydinnstillinger er feil

**Problem**: Kilden dekoder lyd internt og sender PCM til AVR-en.

**Løsning:**
- **Apple TV**: Innstillinger → Video og lyd → Lydformat → Dolby Atmos: På
- **PS5**: Innstillinger → Lyd → Lydformat → Bitstream (Dolby)
- **Xbox**: Innstillinger → Volum og lyd → Bitstream format → Dolby Atmos for hjemmekino
- **Blu-ray-spiller**: Sett lydutgang til Bitstream (ikke PCM)

### Innholdet har ikke Atmos

Ikke alt innhold har Atmos. Sjekk:

- **Netflix**: Se etter «Atmos»-ikonet på filmens infoside (krever Premium-abonnement)
- **Disney+**: Se etter «Atmos»-merke
- **Apple TV+**: Det meste har Atmos
- **Blu-ray**: Sjekk bakside av coveret for «Dolby Atmos»

### Tilkoblingen begrenser formatet

**Via ARC (ikke eARC)**: ARC støtter Atmos kun via Dolby Digital Plus (komprimert). For Atmos via TrueHD (tapsfri) trenger du eARC.

**Via optisk kabel**: Optisk støtter IKKE Atmos i det hele tatt. Bruk HDMI.

**Løsning:**
- Koble kilden direkte til AVR via HDMI
- Eller bruk eARC mellom TV og AVR for Atmos via TV-ens apper

Les mer: [HDMI eARC-guide](/guide/hdmi-earc-guide/)

### AVR-ens høyttalerkonfigurasjon

AVR-en kan bare sende Atmos hvis den vet at du har høydehøyttalere:

1. Gå til AVR-ens høyttalerkonfigurasjon
2. Sjekk at Atmos/høydehøyttalere er definert (Top Front, Top Rear, Dolby Atmos Enabled, etc.)
3. Sjekk at de er satt til riktig type og størrelse
4. Kjør romkalibreringen på nytt etter endringer

### Strømmeboksen støtter ikke Atmos

Ikke alle strømmebokser sender Atmos:

| Enhet | Atmos-støtte |
|-------|-------------|
| Apple TV 4K | Ja (DD+) |
| NVIDIA Shield Pro | Ja (DD+ og TrueHD) |
| Chromecast med Google TV | Ja (DD+) |
| Eldre Chromecast | Nei |
| Smart-TV-apper | Varierer |

## Atmos via strømming vs Blu-ray

- **Strømming**: Atmos via Dolby Digital Plus (komprimert, men fortsatt god kvalitet)
- **Blu-ray**: Atmos via Dolby TrueHD (tapsfri, best kvalitet)
- Begge gir Atmos-effekter, men Blu-ray gir høyere lydkvalitet

## Sjekkliste

- [ ] Innholdet har faktisk Atmos (sjekk ikon)
- [ ] Kildens lyd satt til Bitstream/Atmos
- [ ] Kilde koblet direkte til AVR via HDMI (eller TV med eARC)
- [ ] AVR viser «Dolby Atmos» på displayet
- [ ] Høydehøyttalere definert i AVR-konfigurasjon
- [ ] Ikke brukt optisk kabel
- [ ] Firmware oppdatert på alle enheter

## Relaterte artikler

- [Slik setter du opp surround](/guide/slik-setter-du-opp-surround/)
- [HDMI eARC-guide](/guide/hdmi-earc-guide/)
- [Forstå lyd og bilde](/nybegynner/forsta-lyd-og-bilde/)
- [Forsterker og AVR](/lyd/forsterker-og-avr/)
