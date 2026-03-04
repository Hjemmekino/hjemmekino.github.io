---
title: "Lip sync-problemer – Lyd og bilde ute av synk"
description: "Slik løser du lip sync-problemer i hjemmekinoen. Årsaker og løsninger for forsinkelse mellom lyd og bilde."
date: 2025-01-15
draft: false
slug: "lip-sync-problemer"
tags: ["feilsøking", "lip sync", "forsinkelse", "lyd"]
categories: ["Feilsøking"]
image: "images/feilsoking/lip-sync.jpg"
weight: 2
---

# Lip sync-problemer – Lyd og bilde ute av synk

Når leppene beveger seg, men lyden kommer litt for sent (eller for tidlig), ødelegger det opplevelsen. Her løser vi det.

## Hurtigløsning

1. **Sjekk ARC/eARC** – koble via HDMI i stedet for optisk
2. **Aktiver «Auto Lip Sync»** i AVR-ens innstillinger
3. **Deaktiver bildebehandling** på TV-en (motion smoothing, etc.)
4. **Juster manuelt** – AVR-en har en lip sync-forsinkelsesinnstilling (prøv 20–60 ms)

## Hvorfor oppstår lip sync-problemer?

Forsinkelse kan oppstå fordi:

- **TV-ens bildebehandling** tar tid (motion smoothing, upscaling)
- **AVR-ens lydprosessering** tar tid
- **ARC-signalvei** legger til forsinkelse
- **Strømmeboksens dekoding** tar tid

Forskjellen trenger bare å være 20–40 ms for å bli merkbar.

## Løsninger

### 1. Aktiver Auto Lip Sync Correction

De fleste moderne AVR-er og TV-er støtter automatisk lip sync via HDMI:

- Sjekk at dette er aktivert i **både** TV og AVR
- Fungerer best med eARC
- Fjerner de fleste lip sync-problemer automatisk

### 2. Reduser TV-ens bildebehandling

Bildebehandling (motion smoothing, støyreduksjon, dynamisk kontrast) legger til forsinkelse:

- Bruk **spillmodus** eller **Filmmaker Mode** (minimal prosessering)
- Deaktiver motion smoothing helt
- Mindre prosessering = mindre forsinkelse

### 3. Juster manuelt på AVR-en

Hvis automatisk korreksjon ikke fungerer:

1. Spill noe med tydelig dialog (nyhetssending fungerer godt)
2. Gå til AVR-ens lydinnstillinger
3. Finn «Audio Delay» eller «Lip Sync»
4. Juster i trinn på 5–10 ms til lyd og bilde stemmer
5. Typisk verdi: 20–80 ms forsinkelse

### 4. Koble kilde direkte til AVR

Mange lip sync-problemer skyldes signalveien via TV-en:

```
Kilde → AVR → TV (via eARC)
```

er bedre enn:

```
Kilde → TV → AVR (via ARC)
```

Les mer: [HDMI eARC-guide](/guide/hdmi-earc-guide/)

### 5. Sjekk strømmeboksens innstillinger

Noen strømmebokser har lydforsinkelses-innstillinger:

- **Apple TV**: Innstillinger → Video og lyd → Synkroniser trådløs lyd
- **NVIDIA Shield**: Innstillinger → Enhetsinnstillinger → Lyd

## Sjekkliste

- [ ] Auto Lip Sync aktivert i AVR og TV
- [ ] Bildebehandling minimert/av
- [ ] HDMI brukt i stedet for optisk
- [ ] Kilde koblet via AVR (ikke via TV)
- [ ] Manuell justering prøvd
- [ ] Firmware oppdatert på alle enheter

## Relaterte artikler

- [HDMI eARC-guide](/guide/hdmi-earc-guide/)
- [Kalibrering av hjemmekino](/guide/kalibrering-av-hjemmekino/)
- [AVR-oppsett](/oppsett-og-kalibrering/avr-oppsett/)
