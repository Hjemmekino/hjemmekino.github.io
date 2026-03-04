---
title: "Romkorreksjon og måling – Analyser rommet ditt"
description: "Lær å måle og analysere romakustikken din. REW, mikrofoner, frekvensrespons og romkorreksjon forklart."
date: 2025-01-15
draft: false
slug: "romkorreksjon-og-maling"
tags: ["romkorreksjon", "REW", "måling", "akustikk", "frekvensrespons"]
categories: ["Rom & Akustikk"]
image: "images/rom-akustikk/romkorreksjon-maling.jpg"
weight: 2
---

# Romkorreksjon og måling – Analyser rommet ditt

Å måle rommet gir deg fakta å jobbe med. I stedet for å gjette hvor akustikkbehandling trengs, kan du se nøyaktig hva som skjer og verifisere at tiltak faktisk hjelper.

## Hvem passer dette for?

Deg som vil gå lenger enn automatisk kalibrering og virkelig forstå hva rommet gjør med lyden.

## Kortversjon

- **REW** (Room EQ Wizard) er gratis programvare for rommåling
- En **kalibrert målemikrofon** (fra ca. 500 kr) er alt du trenger av utstyr
- Mål **frekvensrespons**, **etterklangstid** og **waterfall-plot**
- Mål **før og etter** akustikkbehandling for å verifisere forbedring
- Bruk resultatene til å finjustere AVR-ens romkorreksjon

## Hva kan du måle?

### Frekvensrespons

Viser hvor høyt (dB) rommet reproduserer ulike frekvenser. Ideelt vil du se en flat linje, men alle rom har topper og daler – spesielt i bassen.

**Typiske problemer**:
- **Topper** (rommoduler) – visse bassfrekvenser er altfor sterke
- **Daler/hull** – visse frekvenser nesten forsvinner (kansellering)
- **Rulle-av** – systemet spiller ikke dypt nok i bassen

### Etterklangstid (RT60)

Hvor lang tid det tar før lyden dør ut 60 dB. Anbefalt for hjemmekino:

| Romtype | Anbefalt RT60 |
|---------|--------------|
| Dedikert kinorom | 0,2–0,4 sekunder |
| Dagligstue | 0,3–0,6 sekunder |
| Musikkrom | 0,4–0,7 sekunder |

### Waterfall-plot

Et 3D-plot som viser frekvensrespons over tid. Avslører resonanser som henger igjen (rommoduler, kabinettresonanser).

### Impulsrespons

Viser førsterefleksjoner og etterklang i tidsdomenet. Hjelper deg identifisere problematiske refleksjoner.

## Utstyr du trenger

### Minimum

- **Kalibrert målemikrofon**: miniDSP UMIK-1 (USB, ca. 500–800 kr) er standard
- **PC/Mac**: Med REW installert
- **Stativ**: For å plassere mikrofonen i lytteplassen

### Avansert

- **Kalibrert mikrofon** med individuell kalibreringsfil
- **Ekstern lydkort** for mer presis måling
- **Profesjonell programvare** (REW er fortsatt utmerket og gratis)

## Slik måler du med REW

### Steg 1: Installer REW

Last ned Room EQ Wizard fra roomeqwizard.com – det er gratis og tilgjengelig for Windows, Mac og Linux.

### Steg 2: Konfigurer

1. Koble UMIK-1 til PCen via USB
2. Velg UMIK-1 som inngang i REW
3. Last inn kalibreringsfilen for mikrofonen
4. Velg lydutgang (enten direkte til AVR via HDMI, eller via USB-lydkort)

### Steg 3: Mål

1. Plasser mikrofonen i lytteplassen, i ørenhøyde
2. Pek mikrofonen rett opp (for omnidireksjonell måling)
3. Generer en «sweep» (testtone fra 20 Hz til 20 kHz)
4. REW viser frekvensresponsen

### Steg 4: Analyser

- Se etter **topper over +6 dB** – kandidater for bassfelle
- Se etter **daler under -6 dB** – vanskelig å fikse (plassering kan hjelpe)
- Sjekk **etterklangstid** – er den for lang?
- Sammenlign **venstre vs høyre** for å sjekke symmetri

### Steg 5: Mål igjen etter endringer

Gjenta måling etter:
- Akustikkbehandling
- Høyttalerflytting
- Subwoofer-plassering
- Kjøring av romkorreksjon

## AVR-ens romkorreksjon i praksis

### Audyssey MultEQ

- Bruker opptil 8 målepunkter
- Korrigerer frekvensrespons og timing
- **XT32** er den beste versjonen (mer presis)
- **Audyssey-appen** (mot ekstra kostnad) gir full kontroll over kurven

### Dirac Live

- Tilgjengelig som tillegg for mange AVR-er
- Svært presis romkorreksjon
- Lar deg definere en målkurve
- Anses som noe av det beste tilgjengelig

### YPAO (Yamaha)

- Yamahas egen romkorreksjon
- God grunnleggende korreksjon
- **R.S.C.** (Reflected Sound Control) er den avanserte versjonen

## Romkorreksjon vs akustikkbehandling

**Romkorreksjon** (EQ, digital) kan:
- Senke topper i frekvensresponsen
- Justere tidsforsinkelser

**Romkorreksjon kan IKKE**:
- Fjerne resonanser (de henger fortsatt igjen i tid)
- Fylle daler (å forsterke kansellerte frekvenser krever enorm kraft)
- Redusere etterklangstid

**Akustikkbehandling** (fysisk) kan alt dette. Ideelt bruker du **begge deler**: fysisk behandling først, deretter romkorreksjon for finpuss.

## Praktiske tips

- Mål alltid i **lytteplassen** – det er der det teller
- Bruk **flere målepunkter** rundt lytteplassen for å se variasjon
- **Lagre alle målinger** for sammenligning over tid
- Del målinger i netforum for tilbakemelding fra erfarne brukere
- Mål **subwooferen separat** for bedre analyse av bassregionen

## Vanlige feil

- Stoler blindt på automatisk kalibrering uten å verifisere med måling
- Forventer at romkorreksjon fikser alt (fysisk behandling er grunnlaget)
- Glemmer å laste inn mikrofon-kalibreringsfil (målingene blir unøyaktige)
- Måler med for lavt volum (bakgrunnsstøy påvirker resultatet)
- Tolker en flat frekvensrespons som «perfekt» uten å sjekke waterfall/RT60

## Neste steg

- [Akustikkbehandling](/rom-og-akustikk/akustikkbehandling/) – Fysisk rombehandling
- [Kalibrering av hjemmekino](/guide/kalibrering-av-hjemmekino/) – Komplett kalibrering
- [Slik kalibrerer du subwoofer](/guide/slik-kalibrerer-du-subwoofer/) – Perfekt bass
- [Forsterker og AVR](/lyd/forsterker-og-avr/) – Forstå romkorreksjonssystemene
