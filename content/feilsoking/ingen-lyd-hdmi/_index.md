---
title: "Ingen lyd via HDMI – Slik løser du det"
description: "Feilsøking for manglende lyd via HDMI i hjemmekinoen. Steg-for-steg guide til å finne og fikse lydproblemer."
date: 2025-01-15
draft: false
slug: "ingen-lyd-hdmi"
tags: ["feilsøking", "HDMI", "lyd", "ingen lyd"]
categories: ["Feilsøking"]
image: "images/feilsoking/ingen-lyd-hdmi.jpg"
weight: 1
---

# Ingen lyd via HDMI – Slik løser du det

Ingen lyd er et av de vanligste problemene i hjemmekino. Heldigvis er det nesten alltid en enkel løsning.

## Hurtigløsning

Prøv disse i rekkefølge:

1. **Sjekk volumet** – er AVR/soundbar på mute?
2. **Sjekk inngangen** – er AVR-en på riktig HDMI-inngang?
3. **Trekk ut og sett inn HDMI-kabelen** på nytt
4. **Start alt på nytt** – slå av TV, AVR og kilde, vent 30 sekunder, slå på i rekkefølgen: TV → AVR → kilde

## Detaljert feilsøking

### Problem: Ingen lyd fra noen kilde

**Mulige årsaker:**

- AVR-en er på feil inngang
- TV-ens lydutgang er satt til innebygde høyttalere
- HDMI-kabelen mellom TV og AVR er løs eller defekt
- eARC/ARC er ikke aktivert

**Løsninger:**

1. Sjekk at TV-ens lydutgang er satt til «HDMI ARC» eller «Ekstern høyttaler»
2. Sjekk at eARC er aktivert i TV-ens innstillinger
3. Prøv en annen HDMI-kabel mellom TV og AVR
4. Sjekk at AVR-ens HDMI-utgang er koblet til TV-ens eARC/ARC-port

### Problem: Lyd fra TV, men ikke fra AVR

**Mulige årsaker:**

- TV-en spiller via innebygde høyttalere
- ARC/eARC er ikke aktivert
- CEC-konflikter

**Løsninger:**

1. Gå til TV-ens lydinnstillinger → sett lydutgang til HDMI ARC
2. Aktiver eARC i TV-ens innstillinger
3. Aktiver CEC (SimpLink/Anynet+/Bravia Sync)
4. Start begge enheter på nytt

### Problem: Lyd fra noen kilder, men ikke andre

**Mulige årsaker:**

- Kilden er koblet til feil HDMI-port
- Kildens lydinnstillinger er feil
- Kabelen er defekt

**Løsninger:**

1. Sjekk at kilden er koblet til riktig HDMI-inngang på AVR
2. Sjekk kildens lydutgang-innstillinger (sett til Auto eller Bitstream)
3. Prøv kilden i en annen HDMI-port på AVR-en
4. Prøv en annen HDMI-kabel

### Problem: Kun stereo, ikke surround

**Mulige årsaker:**

- Kilden sender stereo i stedet for surround
- AVR-en dekoder ikke formatet
- Optisk kabel brukes (støtter ikke Atmos/TrueHD)

**Løsninger:**

1. Sjekk kildens lydinnstillinger – sett til «Bitstream» i stedet for «PCM»
2. Sjekk at innholdet faktisk har surroundlyd (se etter 5.1/Atmos-ikon i strømmeappen)
3. Bytt fra optisk til HDMI-tilkobling
4. Les mer: [Dolby Atmos virker ikke](/feilsoking/dolby-atmos-virker-ikke/)

## Sjekkliste

- [ ] Volum sjekket (ikke mute)
- [ ] Riktig inngang på AVR
- [ ] TV-ens lydutgang satt til HDMI/ARC
- [ ] eARC aktivert i TV-innstillinger
- [ ] HDMI-kabel sitter ordentlig i
- [ ] Alt startet på nytt
- [ ] Firmware oppdatert

## Fortsatt problemer?

- Prøv å koble kilden direkte til TV-en – hvis lyden fungerer, er problemet mellom TV og AVR
- Reset AVR-en til fabrikkinnstillinger som siste utvei
- Sjekk produsentens support-sider for kjente problemer

## Relaterte artikler

- [HDMI eARC-guide](/guide/hdmi-earc-guide/)
- [HDMI-handshake-feil](/feilsoking/hdmi-handshake-feil/)
- [HDMI og tilkoblinger](/nybegynner/hdmi-og-tilkoblinger/)
