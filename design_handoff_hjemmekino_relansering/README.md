# Handoff: Hjemmekino.no – relansering

## Overview
Komplett designkonsept for relanseringen av Hjemmekino.no som «Referanserommet» — Norges uavhengige kunnskapsplattform for hjemmekino, HiFi og AV-teknologi. Dekker fase 1 (redaksjonell relansering) og fase 2 (produktplattform) fra designbriefen: forside, artikkelmaler, oversiktssider, produktdatabase med filtre, produktside, sammenligning, emnesider, søk, ordliste og lys/mørk modus.

## About the Design Files
Filene i denne pakken er **designreferanser laget i HTML** — en interaktiv prototype som viser tiltenkt utseende og oppførsel, ikke produksjonskode. Oppgaven er å **gjenskape designet i målkodebasens miljø**. Eksisterende repo er en Hugo-site (hjemmekino.github.io); velg selv om relanseringen bygges videre på Hugo eller på et moderne rammeverk (Next.js/Astro anbefales pga. produktdatabase + søk + sammenligning som krever klient-tilstand). Prototypen skal IKKE shippes som den er.

`Hjemmekino Prototype.dc.html` er hovedreferansen. Den bruker et proprietært komponentformat: se `<x-dc>`-blokken for markup (inline styles = eksakte designverdier) og `<script data-dc-script>` for all data, tilstand og interaksjonslogikk. `DESIGN-BRIEF.md` er det opprinnelige kravdokumentet og er førende der prototypen ikke dekker noe.

## Fidelity
**High-fidelity.** Farger, typografi, avstander, radius og tilstander er endelige designbeslutninger og skal gjenskapes presist. Unntak: alle bilder er plassholdere (gradient-flater merket «FOTO/BILDE») — ekte foto skal inn ved implementasjon. Mobilvisning er IKKE designet ennå; briefen krever mobil-først, så mobile brytninger må designes/avklares (se «Responsive behavior»).

## Design Tokens
Definert som CSS custom properties på `body`, byttes med `body[data-theme="dark"]`.

### Lys modus (default)
- `--bg: #F8F5F2` (varm hvit sidebakgrunn)
- `--surface: #FFFFFF` (kort, paneler)
- `--surface2: #F1EBE5` (sekundær flate, tabellhoder)
- `--ink: #1B1614` (primærtekst)
- `--muted: #6E645A` (sekundærtekst)
- `--faint: #8C8177` (metadata, plassholdere)
- `--line: #E5DED7` (kantlinjer, delelinjer)
- `--accent: #BE4B2F` (signalfarge «kinoglød» — rustrød)
- `--accent-hover: #A63E25`
- `--accent-soft: #F6E6DF` (uthevet bakgrunn, «Kort fortalt»-bokser)
- `--accent-text: #A83F24` (lenkefarge på lys flate)
- `--on-accent: #FFFFFF`
- Mørk identitetsflate (header-bånd/hero/footer, brukes i BEGGE moduser): `--band: #1B1614`, `--band-ink: #F5EFE9`, `--band-muted: #B0A79D`, `--band-line: #3A322C`, `--band-accent: #E07B5A`
- Semantisk: `--ok: #2E7D46` (nybegynner/aktiv), `--warn: #9A6A12` (middels), `--err: #A8422C` (avansert/fjern), `--info: #2F6B8A` (kommende)
- `--shadow: 0 2px 10px rgba(27,22,20,.06)`

### Mørk modus
- `--bg: #161210`, `--surface: #211C18`, `--surface2: #2A241F`, `--ink: #F0EAE3`, `--muted: #B5AA9E`, `--line: #372F29`
- `--accent: #E07B5A`, `--accent-hover: #EA9075`, `--accent-soft: #3A2A22`, `--accent-text: #E58A6B`, `--on-accent: #1B1614`
- `--band: #0F0C0A`, `--band-line: #332C26`
- Semantisk (lysere for kontrast): `--ok: #5BAE77`, `--warn: #C99A3F`, `--err: #D96B50`, `--info: #6FA8C7`
- Tema lagres i `localStorage` (nøkkel `hk-theme`) og settes som `data-theme` på body.

### Typografi
- Familie: **IBM Plex Sans** (400/500/600/700, kursiv 400) overalt; **IBM Plex Mono** til nummererte «Start her»-tall.
- Skala (desktop): H1 forside-hero 33px/1.15 · H1 sidetittel 30px/700, letter-spacing -.02em · H1 artikkel 34–36px/1.15 · H2 artikkel 23–24px/700 · Brødtekst artikkel 16.5px/1.65 · Ingress 17–17.5px/1.55 · Korttitler 14.5–17px/600–700 · Metadata 12–13px · Kicker/etiketter 11–12px, 700, letter-spacing .08em, uppercase.
- `font-variant-numeric: tabular-nums` på ALLE priser, datoer, mål og spesifikasjonsverdier.
- Logo: «Hjemmekino» i `--ink` + «.no» i `--accent`, 24px/700, letter-spacing -.03em; undertekst «Film er best hjemme · siden 1998» 11.5px `--faint`.

### Form og rytme
- Radius: kort/paneler 10px, store bilder 12px, knapper/chips/inputs 999px (pill), små badges 5px.
- Innholdsbredde: maks 1240px, side-padding 32px. Artikkel-lesemål: 720px.
- Skygge kun `--shadow` på kort; ingen andre skygger.
- Knapper: primær = pill, `--accent`-bakgrunn, hover `--accent-hover`; sekundær = pill, `--surface` + 1px `--line`, hover border `--accent`; mørk CTA = `--ink`-bakgrunn, hover `--accent`.
- Kort-hover: border skifter til `--accent` (aldri skalering/skygge-endring).

## Screens / Views
Alle sider deler: sticky header (logo, søkefelt-pill 220px, tematoggle ☾/☀ 38px sirkel, «Start her»-pill, nav-rad med 3px understrek i `--accent` på aktivt punkt) og footer (mørkt bånd `--band`, 4 kolonner: merkevare, Innhold, Emner, Om; bunnlinje med © og «Film er best hjemme.» i `--band-accent`).

1. **Forside** — moduler i rekkefølge: (1) mørkt hero-bånd, split 50/50: tekst venstre (kicker, H1, ingress, «Les saken»-CTA, metadata) + bilde høyre; under: 3 sekundærsaker i kolonner adskilt av `--band-line`. (2) «Start her»: 4 hvite kort med mono-nummer 01–04, borderhover. (3) To kolonner: «Siste nytt» (kompakt liste m/ kategori·dato) + «Aktuelle guider» (thumb 74×52, nivåprikk i semantisk farge, oppdatert-dato). (4) Produktdatabasen på `--surface2`-bånd: 2 aktive kategorikort + 2 stiplede «Kommer»-kort. (5) «Teknologi forklart»: 3 kort med skjerm-ikon. (6) Emnenavigasjon: 5 kort (Lyd, Bilde, Rom, Kilder, Gaming) med beskrivelse. (7) Nyhetsbrev + uavhengighetserklæring. INGEN karusell.
2. **Nyheter (oversikt)** — brødsmule, H1, kategorifilter som pill-chips (Alle + kategorier; aktiv = `--ink`-bakgrunn/`--bg`-tekst), 2/1-kolonner: saksliste (kicker kategori·dato, 18px tittel, lead) + sidefelt («Hvorfor dette er viktig»-boks og reservert annonseflate med stiplet ramme og «Annonse»-merking). «Last flere»-knapp (ikke paginering).
3. **Guider (oversikt)** — 3-kolonners kortgrid: bilde 120px, tittel, beskrivelse, nivåprikk + tid + oppdatert.
4. **Teknologi (oversikt)** — 2-kolonners kort + mørkt ordliste-CTA-bånd.
5. **Ordliste** — 2-kolonners definisjonskort (term 16px/700 + én setning).
6. **Artikkel: guide** — header m/ badge «Guide · Lyd», nivå + tidsbruk, H1 36px, ingress, forfatterlinje m/ publisert + «Sist faglig oppdatert» i `--ok`. Layout 230px sticky innholdsfortegnelse (venstre kant 2px `--line`, aktivt punkt `--accent`) + 720px innhold. Innholdskomponenter: «Kort fortalt»-boks (kulepunkter), SVG-illustrasjon på `--surface2`, tips-boks (3px venstre-border `--ok`), advarsel-boks (`--err`), spesifikasjonstabell (header `--surface2`), konklusjonsboks (`--accent-soft`, 3px `--accent`-border), endringslogg, «Meld inn feil»-lenke.
7. **Artikkel: teknologi** — mørkt `--band`-hode (badge, H1 34px, ingress, oppdatert-dato i `--band-accent`), 720px sentrert innhold: «Kort forklart»-boks, signalvei-SVG-diagram, «Vanlige misforståelser» (`--warn`-bokser), begrepschips → ordliste, relatert-boks.
8. **Artikkel: nyhet** — 720px sentrert, badge, H1 33px, lead, 16:9-bilde m/ krediteringstekst, «Hvorfor dette er viktig»-boks, relatert produktkort, kildeavsnitt («basert på produsentopplysninger — vi har ikke testet produktet»).
9. **Produktoversikt** — kategorifaner (Projektorer / AV-receivere, 3px understrek), 250px filterpanel (merke-chips, status-select, sorterings-select, «Nullstill filtre»-lenke, produsentdata-disclaimer) + resultatliste: radkort med 110×74 bilde, navn + statusprikk (Aktiv `--ok` / Kommende `--info` / Utgått `--faint`), «Kort fortalt»-utdrag, modellår + verifiseringsdato, pris m/ prisdato, «+ Sammenlign»-knapp (valgt = `--ink`-fylt «✓ Valgt»). Treffteller + aktive filterchips (klikk for å fjerne).
10. **Produktside** — brødsmule, 50/50: produktbilde (4:3, nøytral) + info (kategori-kicker, status·år, H1 28px, «Kort fortalt»-boks på `--accent-soft`, pris 22px + «Veiledende pris (dato)», «Spesifikasjoner verifisert dd.mm.åååå · Kilde: Produsent», CTA «Legg til sammenligning» + sekundær «Meld inn feil data»). Under 2/1: grupperte spesifikasjonstabeller (Bilde/Formater/Tilkobling/Installasjon for projektor; Lyd/Formater/Tilkobling/Praktisk for receiver; 220px etikettkolonne) + «Lignende produkter» og «Relatert innhold».
11. **Sammenligning** — inntil 4 produkter, grid `220px + 1fr per produkt`. Sticky-aktig produkthode på `--surface2` (bilde, navn, pris, status, «Fjern ✕»). Gruppeheadere, rader der forskjeller markeres med `--accent-soft`-bakgrunn. Toggle «Vis bare forskjeller» (av som standard i prototypen; briefen anbefaler på som standard — avklar). Manglende data vises som «Ikke oppgitt», aldri «Nei». Tom-tilstand med CTA til produktene. Forklaringstekst under tabellen.
12. **Sammenligningsskuff** — fast bunnbar (`--band`) synlig på alle sider når ≥1 produkt er valgt (skjules på selve sammenligningssiden): valgte produkter som chips m/ ✕, «Tøm», «Sammenlign (n)»-CTA.
13. **Emneside** — mørkt hode (H1 34px, intro, «Anbefalt start»-boks), 2/1: Sentrale guider, Teknologi innen emnet, FAQ-trekkspill (+/− ikon) + sidefelt Siste nytt og Relaterte produktkategorier. Datadrevet for alle 5 emner.
14. **Søk** — 860px sentrert, stort søkefelt (2px `--accent`-border, 14px radius), live-resultater på tvers av nyheter/guider/teknologi/produkter/ordliste med typebadge i typefarge (Nyhet `--info`, Guide `--ok`, Teknologi `--warn`, Produkt `--accent-text`, Ordliste `--faint`), treffteller, hint-tekst når < 2 tegn.

## Interactions & Behavior
- All navigasjon er klientside i prototypen; implementer som ekte ruter med delbare URL-er (krav i briefen — spesielt filtre og sammenligning skal bevares i URL).
- Tematoggle: bytt `data-theme`, persister i localStorage, respekter gjerne `prefers-color-scheme` som default.
- Sammenligning: maks 4; valg fra annen kategori nullstiller listen (kun samme kategori kan sammenlignes).
- FAQ: ett åpent om gangen. TOC-lenker: ankernavigasjon med `scroll-margin-top: 120px` (sticky header).
- Hover: kort/knapper skifter borderfarge til `--accent`; lenker skifter til `--accent-hover`. Fokus-tilstander må legges til (WCAG 2.2 AA — synlig fokusring, forslag: 2px `--accent` outline med offset).
- Ingen autoplay/karuseller. Respekter `prefers-reduced-motion`.

## State Management
- `theme` (light/dark, persistert), `route` (+ param: artikkel-id / produkt-id / emne-id), `compare: string[]` (produkt-id-er, bør persisteres), produktfiltre `{cat, brand, status, sort}`, `newsCat`, `query`, `onlyDiff`, `faqOpen`.
- Datamodell: se `products`, `specDefs`, `news`, `guides`, `tech`, `emner`, `glossary` i prototypens script — feltene der (status, price + priceDate, verified, kilde, specs per kategori-definisjon) er den tiltenkte innholdsmodellen. Alt innhold er realistisk, men FIKTIVT — skal erstattes med redaksjonelt innhold.

## Responsive behavior (må designes)
Briefen (kap. 20) krever mobil-først: filterdialog på små skjermer, sammenligning med fast produkthode, kollapsbar TOC, moderat sticky-bruk. Desktop-designet her er referansen; be om mobilskisser før implementasjon eller utled dem fra briefens regler.

## Assets
- Fonter: IBM Plex Sans + IBM Plex Mono (Google Fonts, åpen lisens).
- Alle bilder er plassholdere. Ikoner: kun søk-lupe (inline SVG) + tegnene ☾/☀/✕/→/●; velg et konsistent ikonsett ved implementasjon.
- Ny ordmerke-logo er ren typografi (se Typografi over) — ingen bildefil nødvendig.

## Files
- `tokens.css` — ferdig token-fil (lys + mørk, typografi- og avstandsskala, fokusring, basisregler). Kan droppes rett inn i kodebasen; mørk modus via `data-theme="dark"`.
- `Designsystem.dc.html` — komponentbibliotek-side: farger, typografi, form/rytme, knapper (alle tilstander), chips/badges/status, skjema, kort, innholdsbokser, tabeller/diff-markering, tom/lastende/feilet tilstand. Har egen lys/mørk-toggle.
- `Hjemmekino Prototype.dc.html` — hele prototypen (markup + tokens + data + logikk). Kan åpnes i nettleser.
- `Forside Varianter.dc.html` — de tre utforskede retningene (1a amber, 1b cyan, 1c rustrød). Valgt retning: **1c**.
- `DESIGN-BRIEF.md` — opprinnelig kravdokument (førende for alt som ikke er visualisert, bl.a. kommersiell merking, tilgjengelighetskrav, arkivmerking).
