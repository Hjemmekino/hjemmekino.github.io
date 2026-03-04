---
title: "HDMI-handshake-feil – Svart skjerm og signaltap"
description: "Feilsøking av HDMI-handshake-problemer. Løs svart skjerm, flimring og signaltap i hjemmekinoen."
date: 2025-01-15
draft: false
slug: "hdmi-handshake-feil"
tags: ["feilsøking", "HDMI", "handshake", "svart skjerm"]
categories: ["Feilsøking"]
image: "images/feilsoking/hdmi-handshake.jpg"
weight: 3
---

# HDMI-handshake-feil – Svart skjerm og signaltap

HDMI-handshake-feil er frustrerende: svart skjerm, flimring, eller bilde som forsvinner tilfeldig. Problemet skyldes at enheter ikke klarer å bli enige om signalformat.

## Hurtigløsning

1. **Trekk ut og sett inn HDMI-kabelen** – løser ofte en midlertidig handshake-feil
2. **Slå av alt, vent 30 sekunder, slå på igjen** (TV først, deretter AVR, deretter kilde)
3. **Prøv en annen HDMI-kabel** – defekte kabler er en vanlig årsak
4. **Sett HDMI-signalformat til «Standard» midlertidig** for å utelukke kabelproblemer

## Vanlige symptomer

- **Svart skjerm** etter oppstart
- **Bilde som flimrer** eller faller ut
- **Lilla/grønt bilde** eller feilfarger
- **«Ingen signal»-melding** på TV-en
- **Bilde fungerer i 30 sekunder, deretter svart**

## Årsaker og løsninger

### HDCP-feil (kopibeskyttelse)

HDCP (High-bandwidth Digital Content Protection) krever at alle enheter i kjeden autentiserer seg. Feil her gir svart skjerm.

**Løsning:**
1. Sjekk at alle enheter støtter HDCP 2.2/2.3
2. Bruk HDMI-porter som støtter HDCP (ikke alle gjør det)
3. Oppdater firmware på alle enheter
4. Prøv å koble kilde direkte til TV for å isolere problemet

### Signalformat-uenighet

Kilden sender et format som TV-en eller AVR-en ikke forstår.

**Løsning:**
1. Sett kildens oppløsning manuelt (f.eks. 4K/60Hz i stedet for auto)
2. Aktiver «Enhanced Signal» / «HDMI Deep Color» på TV-ens port
3. Sjekk at AVR-en støtter passthrough av formatet

### Kabelproblemer

HDMI-kabler kan se fine ut men ha interne feil, spesielt for 4K/HDR-signaler.

**Løsning:**
1. Prøv en annen kabel (sertifisert Ultra High Speed)
2. Unngå kabler over 3 meter uten aktiv forsterkning
3. For lange avstander: bruk fiberoptisk HDMI

### CEC-konflikter

For mange CEC-enheter kan skape handshake-problemer.

**Løsning:**
1. Deaktiver CEC på enheter du ikke trenger det på
2. Behold CEC kun på TV + AVR + primærkilde
3. Test om problemet forsvinner uten CEC

### EDID-problemer

EDID er informasjonen TV-en sender til kilden om hva den støtter. Feil EDID kan gi handshake-feil.

**Løsning:**
1. Oppdater firmware
2. Reset TV-en og AVR-en til fabrikkinnstillinger (siste utvei)
3. Noen AVR-er har «EDID Mode» innstillinger – prøv å endre

## Forebyggende tiltak

- Hold firmware oppdatert på alle enheter
- Bruk sertifiserte Ultra High Speed HDMI-kabler
- Minimere antall enheter i HDMI-kjeden
- Unngå HDMI-splittere med mindre de er av god kvalitet
- Dokumenter hvilken innstilling som fungerer

## Sjekkliste

- [ ] HDMI-kabler sjekket/byttet
- [ ] Alt startet på nytt i riktig rekkefølge
- [ ] Enhanced HDMI-signal aktivert
- [ ] CEC-konflikter eliminert
- [ ] Firmware oppdatert
- [ ] Signalformat satt manuelt

## Relaterte artikler

- [HDMI og tilkoblinger](/nybegynner/hdmi-og-tilkoblinger/)
- [HDMI eARC-guide](/guide/hdmi-earc-guide/)
- [Ingen lyd via HDMI](/feilsoking/ingen-lyd-hdmi/)
