# Rua a Rua

Discover Porto street by street. A small web app: pick a start street, choose your way through up to 9 connected streets, and get your walk as a drawing with one line form per street category. Save it as an image.

Part of the design project "The streets of Porto" (Hochschule München, Informatik & Design).

## Run locally

The app loads `data/streets.json`, so it has to be served over http (opening `index.html` by double-click will not work).

    cd webapp
    python3 -m http.server 8000

Then open http://localhost:8000. (Or use the "Live Server" extension in VS Code.)

## Structure

    index.html          markup
    style.css           styles
    app.js              logic (ES module)
    data/streets.json   1,566 streets: name, category, "named after", length, connections, coordinates
    assets/natur.svg    hand-drawn Nature line (reference; the path is embedded in app.js)
    fonts/              Source Serif 4 fallback (woff2 + OFL licence)
    vendor/             jsPDF (postcard PDF, currently hidden in the UI)

## Font

Viroqua, loaded from Adobe Fonts via the web project link in `index.html`. The Viroqua files are not part of this repo (Adobe licence); they are served by Adobe.
Fallback: Source Serif 4 (SIL Open Font License), bundled in `fonts/`, used if the Adobe kit does not load.

## Poster start link

A poster QR code can open the app at its street: `https://<user>.github.io/rua-a-rua/#rua-das-flores` (the feature is prepared but hidden for now).

## Publish (GitHub Pages)

Repo settings -> Pages -> deploy from branch `main`, folder `/ (root)`, with the contents of this folder as the repo root.
