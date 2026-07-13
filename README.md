# Hjemmekino.no

Ny redaksjonell plattform for guider, nyheter, produktinformasjon og teknologiartikler om hjemmekino, HiFi og AV.

## Teknologi

- Hugo 0.153+
- Eget tema i `themes/referanserommet`
- Statisk søkeindeks generert av Hugo
- Produktdata og sammenligning uten serveravhengighet
- Publisering til GitHub Pages via GitHub Actions

## Lokal utvikling

```powershell
hugo server
```

Produksjonsbygg:

```powershell
hugo --cleanDestinationDir --minify
```

## Innhold

Redaksjonelt innhold ligger i `content`. Produktdata er vanlige Hugo-sider under `content/produkter`; JSON til filtre og sammenligning genereres automatisk.

Claude Design-leveransen er bevart i `design_handoff_hjemmekino_relansering` som designreferanse.
