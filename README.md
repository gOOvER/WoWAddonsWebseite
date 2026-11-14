# gOOvER — WoW Addons Website

Statische Portfolio-Website für alle aktiv gepflegten World of Warcraft Addons von **gOOvER** (`https://wow.goover.dev`).

## Features
- **Dark-Slate & Gold UI** passend zu den Reforged-Addons
- **6 aktive Addons** (*Factionizer, Parrot Reforged, Gatherer Reforged, ElvUI Embedder, GuildGreet-Extended, Name2Chat*)
- **DE / EN Sprachumschalter**
- **Live-Filter** nach WoW-Version (`Retail`, `MoP`, `Cata`, `Wrath`, `TBC`, `Classic`, `Forever`) & Suche
- **Live-Versionsabruf** über die GitHub Releases API (mit 30-Minuten-`localStorage`-Cache und statischem Fallback)
- Direktlinks zu **CurseForge**, **Wago.io**, **WoWInterface**, **GitHub** & **GitHub Bugtracker**

## Hosting (Cloudflare Pages)
1. Dieses Projekt in ein GitHub-Repository pushen (z. B. `gOOvER/WoWAddonsWebseite`).
2. Im **Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git** das Repo auswählen.
3. Build-Einstellungen:
   - **Framework preset**: `None`
   - **Build command**: *(leer lassen)*
   - **Build output directory**: `/`
4. Unter **Custom domains** `wow.goover.dev` hinzufügen (Cloudflare legt den DNS-Eintrag automatisch an).
5. Security- & Cache-Header werden automatisch über `_headers` angewendet.
