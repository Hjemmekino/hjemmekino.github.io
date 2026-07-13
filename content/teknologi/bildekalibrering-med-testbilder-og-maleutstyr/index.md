---
title: "Bildekalibrering: fra testbilder til måleutstyr"
description: "Slik stiller du inn lys, sortnivå, farger og HDR – først med øynene, deretter med måleinstrument hvis du vil lenger."
date: 2026-07-13
author: "Hjemmekino.no"
topic: "Bilde og kalibrering"
updated: "13. juli 2026"
image: "/images/editorial/teknologi-bildekalibrering.png"
aliases:
  - /Guide/bildekalibrering-ved-hjelp-av-dve-1738
  - /Guide/bildekalibrering-ved-hjelp-av-hcfr-1739
---

Kalibrering betyr å få skjermen eller projektoren til å gjengi signalet så riktig som mulig. Det er ikke det samme som å gjøre bildet mest mulig spektakulært i butikklys. En god kalibrering bevarer detaljer i mørke og lyse partier, holder gråtonene nøytrale og lar filmskaperens farger stå i fred.

## Start med rommet og riktig bildemodus

Slå av energisparefunksjoner og dynamiske moduser som endrer lysstyrken fra scene til scene. Velg vanligvis **Filmmaker**, **Cinema**, **Film** eller den mest nøytrale modusen. Gjør innstillingene i lyset du faktisk ser film i, og la skjermen bli varm før du vurderer resultatet.

Du trenger testbilder for riktig signaltype: SDR, HDR10 og Dolby Vision lagrer ofte separate innstillinger. Juster derfor ikke én modus og anta at den gjelder alle.

## Dette kan du gjøre uten måleutstyr

Med gode testmønstre kan du kontrollere:

- **Sortnivå:** De mørkeste synlige feltene skal så vidt skilles fra sort, uten at svart blir grått.
- **Hvitnivå:** Lyse detaljer skal være synlige uten at de nærmeste hvittonene flyter sammen.
- **Skarphet:** Senk kunstig konturforsterkning til linjer ikke får lyse glorier.
- **Overscan:** Hele testbildet skal være synlig. Bruk «Just Scan», «Screen Fit», «1:1» eller tilsvarende.
- **Bevegelse:** Velg mengden interpolering etter smak, men vær klar over at høy innstilling endrer filmens uttrykk.

Farge og fargetone bør normalt stå på standardverdien når du ikke måler. Tilfeldig finjustering av hvitbalanse eller fargestyring kan gjøre bildet mindre korrekt.

## Når du måler

En moderne arbeidsflyt bruker et **kolorimeter** mot skjermen, eventuelt profilert mot et mer presist spektrometer. Programvare som ColorHCFR, Calman eller ColourSpace viser gråskala, gamma eller EOTF, fargerom og avvik.

En fornuftig rekkefølge er:

1. Velg riktig bildemodus, lysnivå og signalområde.
2. Mål utgangspunktet og lagre rapporten.
3. Juster to- eller flerpunktshvitbalanse i små trinn.
4. Kontroller gamma i SDR eller tonekurven i HDR.
5. Bruk fargestyringen bare dersom målingene viser et reelt behov.
6. Mål på nytt med flere lysnivåer og verifiser ekte videomateriale.

Måleren må passe skjermteknologien. Uprofilerte, gamle instrumenter kan gi systematiske feil, særlig på nyere OLED-, quantum-dot- og laserbaserte skjermer.

## Hva skjedde med DVE og den gamle HCFR-guiden?

**Digital Video Essentials (DVE)** var en viktig testplate i DVD-, HD DVD- og tidlig Blu-ray-tid. Den kan fortsatt forklare grunnprinsippene, men mønstrene og signalformatene dekker ikke alt en moderne 4K HDR-skjerm gjør. Den gamle Hjemmekino.no-guiden brukte dessuten en plasma-TV og målere som for lengst er utgått.

ColorHCFR finnes fortsatt som et åpen-kildekodeprosjekt. Prinsippene er de samme, men bruk oppdatert programvare, egnede mønstre og et instrument som fungerer med skjermen du måler.

## Unngå disse fellene

- Ikke bruk PC-skjermbilder uten å vite om signalnivå, fargerom og HDR blir sendt riktig.
- Ikke kopier kalibreringsverdier fra en annen skjerm; paneler varierer.
- Ikke jag lave måleavvik dersom justeringen skaper bånding eller andre synlige feil.
- Ikke mål bare midten av gråskalaen. Sortnære detaljer og lyse HDR-partier er minst like viktige.

En profesjonell kalibrering er mest verdifull når skjermen har gode justeringsmuligheter, rommet er kontrollert og du ønsker dokumentert nøyaktighet. For de fleste er riktig bildemodus, riktig sortnivå og deaktiverte butikkfunksjoner den største gevinsten.

## Kilder og videre lesing

- [ColorHCFR – åpen kildekode for skjermmåling](https://sourceforge.net/projects/hcfr/)
