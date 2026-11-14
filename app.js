const ADDONS = [
  {
    id: "factionizer",
    name: "Factionizer",
    category: { en: "Reputation", de: "Ruf & Fraktionen" },
    version: "7.0.1",
    license: "GPL-3.0",
    banner: "assets/banners/factionizer.jpg",
    flavors: ["Retail", "MoP", "Cata", "Wrath", "TBC", "Classic", "Forever"],
    commands: ["/fz", "/factionizer"],
    desc: {
      en: "Complete reputation helper showing exactly which quests, mobs, instances, and items grant standing for any faction.",
      de: "Umfassender Ruf-Helfer, der exakt zeigt, welche Quests, Gegner, Instanzen und Gegenstände Ruf bei jeder Fraktion geben."
    },
    features: {
      en: [
        "Detailed faction breakdown & standing estimator",
        "Dark-Slate & Gold Ace3 UI with ElvUI skinning",
        "Auto-reputation bar switching & Gatherer Reforged integration"
      ],
      de: [
        "Detaillierte Fraktionsübersicht & Ruf-Rechner",
        "Dark-Slate & Gold Ace3-UI mit ElvUI-Anbindung",
        "Automatischer Rufleisten-Wechsel & Gatherer Reforged-Integration"
      ]
    },
    links: {
      repo: "gOOvER/Factionizer",
      curseforge: "https://www.curseforge.com/wow/addons/factionizer",
      wago: "https://addons.wago.io/addons/factionizer"
    }
  },
  {
    id: "parrot-reforged",
    name: "Parrot Reforged",
    category: { en: "Combat Text", de: "Kampftext" },
    version: "1.0.0",
    license: "LGPL-2.1",
    banner: "assets/banners/parrot-reforged.jpg",
    flavors: ["Retail", "MoP", "Cata", "Wrath", "TBC", "Classic", "Forever"],
    commands: ["/parrot", "/parrot anchors"],
    desc: {
      en: "Modernized floating combat text with custom scroll areas, triggers, suppression rules, and combat-log-free fallback feed.",
      de: "Modernisierter schwebender Kampftext mit Scroll-Bereichen, Triggern, Filtern und Fallback-Feed ohne Combat-Log-Taint."
    },
    features: {
      en: [
        "Retail 12.0+ secret-value & fallback combat feed support",
        "Native ElvUI, WindTools & BenikUI styling",
        "Import/Export profiles & triggers via !PAR1! strings"
      ],
      de: [
        "Unterstützung für Retail 12.0+ Secret-Values & Fallback-Feed",
        "Natives ElvUI-, WindTools- & BenikUI-Styling",
        "Profil- & Trigger-Import/-Export über !PAR1!-Strings"
      ]
    },
    links: {
      repo: "gOOvER/Parrot-Reforged",
      curseforge: "https://www.curseforge.com/wow/addons/parrot-reforged",
      wago: "https://addons.wago.io/addons/parrot-reforged"
    }
  },
  {
    id: "gatherer-reforged",
    name: "Gatherer Reforged",
    category: { en: "Professions & Map", de: "Berufe & Karte" },
    version: "1.0.4",
    license: "GPL-3.0",
    banner: "assets/banners/gatherer-reforged.jpg",
    flavors: ["Retail", "MoP", "Cata", "Wrath", "TBC", "Classic", "Forever"],
    commands: ["/gather", "/gather toggle"],
    desc: {
      en: "Modernized herb, mining, and treasure node tracker with HereBeDragons world/minimap pins and AzerothAtlas integration.",
      de: "Modernisierter Kräuter-, Bergbau- und Schatz-Tracker mit HereBeDragons-Kartenpins und AzerothAtlas-Integration."
    },
    features: {
      en: [
        "World Map & Minimap node pins via HereBeDragons",
        "Guild & party node sharing plus HUD overlay",
        "Zero legacy Stubby/SlideBar bloat"
      ],
      de: [
        "Weltkarten- & Minimap-Pins über HereBeDragons",
        "Gilden-/Gruppen-Synchronisation & HUD-Overlay",
        "Ohne veralteten Stubby/SlideBar-Ballast"
      ]
    },
    links: {
      repo: "gOOvER/GathererReforged",
      curseforge: "https://www.curseforge.com/wow/addons/gatherer-reforged",
      wago: "https://addons.wago.io/addons/ZKbqYR61"
    }
  },
  {
    id: "elvui-embedder",
    name: "ElvUI Embedder",
    category: { en: "UI & ElvUI", de: "UI & ElvUI" },
    version: "1.0.0",
    license: "GPL-3.0",
    banner: "assets/banners/elvui-embedder.png",
    flavors: ["Retail", "MoP", "Cata", "Wrath", "TBC", "Classic", "Forever"],
    commands: ["/embed", "/embedder"],
    desc: {
      en: "Lightweight standalone addon to embed Details!, Recount, Skada, or Omen into ElvUI's Left or Right Chat panels.",
      de: "Leichtgewichtiges Addon zum Einbetten von Details!, Recount, Skada oder Omen in die ElvUI-Chatpanels."
    },
    features: {
      en: [
        "Single & Dual-Meter split embedding",
        "Right-click chat toggle & combat/group visibility modes",
        "Optional ElvUI Transparent / Default skinning"
      ],
      de: [
        "Einzel- & Dual-Meter-Split-Einbettung",
        "Rechtsklick-Chat-Toggle & Kampf-/Gruppen-Sichtbarkeit",
        "Optionales ElvUI-Transparent- / Default-Skinning"
      ]
    },
    links: {
      repo: "gOOvER/ElvUI_Embedder",
      curseforge: "https://www.curseforge.com/wow/addons/elvui-embedder",
      wago: "https://addons.wago.io/addons/elvui-embedder"
    }
  },
  {
    id: "ggsocialstate",
    name: "GGSocialState",
    category: { en: "Social & LDB", de: "Social & LDB" },
    version: "2.0.0",
    license: "GPL-3.0",
    banner: "assets/banners/ggsocialstate.jpg",
    flavors: ["Retail", "MoP", "Cata", "Wrath", "TBC", "Classic", "Forever"],
    commands: ["/ggss"],
    desc: {
      en: "LibDataBroker & Minimap tooltip showing online Battle.net friends, character friends, and guild members with quick actions.",
      de: "LibDataBroker- & Minimap-Tooltip für Battle.net-Freunde, Charakter-Freunde und Gildenmitglieder mit Schnellaktionen."
    },
    features: {
      en: [
        "Rich LibQTip-1.0 tooltip with class colors & zones",
        "One-click whisper, invite, /who & guild note editing",
        "ElvUI & AddOnSkins Transparent tooltip styling"
      ],
      de: [
        "Übersichtlicher LibQTip-1.0-Tooltip mit Klassenfarben & Zonen",
        "Schnellaktionen für Flüstern, Einladen, /who & Notizen",
        "ElvUI- & AddOnSkins-Tooltip-Styling"
      ]
    },
    links: {
      repo: "gOOvER/GGSocialState",
      curseforge: "https://www.curseforge.com/wow/addons/ggsocialstate",
      wago: "https://addons.wago.io/addons/ggsocialstate"
    }
  },
  {
    id: "guildgreet-extended",
    name: "GuildGreet-Extended",
    category: { en: "Guild & Social", de: "Gilde & Social" },
    version: "13.1.1",
    license: "GPL-3.0",
    banner: "assets/banners/guildgreet-extended.jpg",
    flavors: ["Retail", "MoP", "Cata", "Wrath", "TBC", "Classic", "Forever"],
    commands: ["/gg", "/guildgreet"],
    desc: {
      en: "Smart guild & friend greeting assistant for logins, level-ups, achievements, and promotions with customizable message lists.",
      de: "Smarter Begrüßungs-Helfer für Gilden- & Freundes-Logins, Level-Ups, Erfolge und Beförderungen."
    },
    features: {
      en: [
        "Complete Ace3 rewrite & Dark-Slate / Gold UI",
        "Main/Alt character grouping & smart cooldowns",
        "Quick greet popup, keybind & auto-greet options"
      ],
      de: [
        "Kompletter Ace3-Rewrite & Dark-Slate / Gold UI",
        "Main/Twink-Gruppierung & intelligente Cooldowns",
        "Schnell-Popup, Tastenbelegung & Auto-Begrüßung"
      ]
    },
    links: {
      repo: "gOOvER/GuildGreet-Extended",
      curseforge: "https://www.curseforge.com/wow/addons/guildgreet-extended",
      wago: "https://addons.wago.io/addons/WL6JA9Nv",
      wowinterface: "https://www.wowinterface.com/downloads/info21709-GuildGreetExtended.html"
    }
  },
  {
    id: "name2chat",
    name: "Name2Chat",
    category: { en: "Chat", de: "Chat" },
    version: "Latest",
    license: "GPL-3.0",
    banner: "assets/banners/name2chat.jpg",
    flavors: ["Retail", "MoP", "Cata", "Wrath", "TBC", "Classic", "Forever"],
    commands: ["/n2c", "/name2chat"],
    desc: {
      en: "Automatically prepends your main character name or custom nickname to outgoing Guild, Officer, Party, and Raid messages.",
      de: "Stellt ausgehenden Gilden-, Offiziers-, Gruppen- und Schlachtzugs-Nachrichten automatisch deinen Main-Namen voran."
    },
    features: {
      en: [
        "Per-channel toggles & smart Retail secret-value safety",
        "Battle.net whisper & whisper-reply support",
        "Lightweight Ace3 configuration & ElvUI compatible"
      ],
      de: [
        "Kanalspezifische Filter & Retail Secret-Value-Schutz",
        "Battle.net- & Flüster-Unterstützung",
        "Leichtgewichtige Ace3-Konfiguration & ElvUI-kompatibel"
      ]
    },
    links: {
      repo: "gOOvER/Name2Chat",
      curseforge: "https://www.curseforge.com/wow/addons/name2chat",
      wago: "https://addons.wago.io/addons/Qb6mWqGP",
      wowinterface: "https://www.wowinterface.com/downloads/info24357-Name2Chat.html"
    }
  }
];

const I18N = {
  en: {
    brandSub: "WoW Addons",
    supportBtn: "Support Development",
    heroBadge: "Reforged & Maintained for Modern & Classic WoW",
    heroTitle: "World of Warcraft Addons",
    heroDesc: "Cleanly engineered, cross-expansion WoW addons supporting Retail, MoP Classic, Cataclysm, Wrath, TBC, Classic Era, and Forever — with native ElvUI support and zero legacy bloat.",
    statAddons: "Active Addons",
    statFlavors: "WoW Flavors",
    statLicense: "GPL-3.0 / LGPL-2.1",
    filterAll: "All",
    searchPlaceholder: "Search addons, features, /commands...",
    emptyState: "No addons match your current filter.",
    supportTitle: "Support Development",
    supportDesc: "Enjoying these addons and want to support ongoing maintenance and updates? Bugs and feature requests can be reported via each addon's Bug Tracker button above.",
    footerNote: "World of Warcraft is a registered trademark of Blizzard Entertainment, Inc.",
    bugsBtn: "Bug Tracker"
  },
  de: {
    brandSub: "WoW Addons",
    supportBtn: "Entwicklung unterstützen",
    heroBadge: "Reforged & gepflegt für Modernes & Classic WoW",
    heroTitle: "World of Warcraft Addons",
    heroDesc: "Sauber entwickelte, erweiterungsübergreifende WoW-Addons für Retail, MoP Classic, Cataclysm, Wrath, TBC, Classic Era und Forever — mit nativem ElvUI-Support und ohne Legacy-Ballast.",
    statAddons: "Aktive Addons",
    statFlavors: "WoW-Versionen",
    statLicense: "GPL-3.0 / LGPL-2.1",
    filterAll: "Alle",
    searchPlaceholder: "Addons, Features oder /Befehle suchen...",
    emptyState: "Keine Addons für den aktuellen Filter gefunden.",
    supportTitle: "Entwicklung unterstützen",
    supportDesc: "Dir gefallen die Addons und du möchtest die Weiterentwicklung unterstützen? Bugs und Wünsche kannst du direkt über den jeweiligen Bugtracker-Button oben melden.",
    footerNote: "World of Warcraft ist eine eingetragene Marke von Blizzard Entertainment, Inc.",
    bugsBtn: "Bugtracker"
  }
};

let currentLang = localStorage.getItem("goover_lang") === "de" ? "de" : "en";
let currentFlavor = "all";
let currentQuery = "";
const liveVersions = {};

const gridEl = document.getElementById("addonsGrid");
const emptyEl = document.getElementById("emptyState");
const searchEl = document.getElementById("searchInput");
const langToggleEl = document.getElementById("langToggle");

function applyTranslations() {
  const dict = I18N[currentLang];
  document.documentElement.lang = currentLang;
  langToggleEl.textContent = currentLang === "en" ? "DE" : "EN";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key]) el.setAttribute("placeholder", dict[key]);
  });
}

function renderAddons() {
  const dict = I18N[currentLang];
  const q = currentQuery.trim().toLowerCase();

  const filtered = ADDONS.filter((addon) => {
    const flavorOk = currentFlavor === "all" || addon.flavors.includes(currentFlavor);
    if (!flavorOk) return false;
    if (!q) return true;

    const haystack = [
      addon.name,
      addon.category[currentLang],
      addon.desc[currentLang],
      ...addon.features[currentLang],
      ...addon.commands,
      ...addon.flavors
    ]
      .join(" ")
      .toLowerCase();

    return haystack.includes(q);
  });

  gridEl.innerHTML = "";
  emptyEl.classList.toggle("hidden", filtered.length > 0);

  filtered.forEach((addon) => {
    const version = liveVersions[addon.id] || addon.version;
    const versionLabel = version.startsWith("v") || version === "Latest" ? version : `v${version}`;
    const githubUrl = `https://github.com/${addon.links.repo}`;
    const issuesUrl = `${githubUrl}/issues`;

    const card = document.createElement("article");
    card.className = "addon-card";
    card.innerHTML = `
      <div class="card-banner-wrap">
        <img class="card-banner" src="${addon.banner}" alt="${addon.name} Banner" loading="lazy" />
        <span class="card-category">${addon.category[currentLang]}</span>
        <span class="card-version" data-version-id="${addon.id}">${versionLabel}</span>
      </div>
      <div class="card-body">
        <div class="card-title-row">
          <h2 class="card-title">${addon.name}</h2>
          <span class="card-license">${addon.license}</span>
        </div>
        <p class="card-desc">${addon.desc[currentLang]}</p>
        <ul class="card-features">
          ${addon.features[currentLang].map((f) => `<li>${f}</li>`).join("")}
        </ul>
        <div class="cmd-row">
          ${addon.commands.map((c) => `<code class="cmd-pill">${c}</code>`).join("")}
        </div>
        <div class="card-meta">
          ${addon.flavors.map((fl) => `<span class="flavor-tag">${fl}</span>`).join("")}
        </div>
        <div class="card-links">
          <a href="${addon.links.curseforge}" target="_blank" rel="noopener noreferrer" class="link-btn link-cf">CurseForge</a>
          <a href="${addon.links.wago}" target="_blank" rel="noopener noreferrer" class="link-btn link-wago">Wago.io</a>
          <a href="${githubUrl}" target="_blank" rel="noopener noreferrer" class="link-btn">GitHub</a>
          <a href="${issuesUrl}" target="_blank" rel="noopener noreferrer" class="link-btn link-bugs">${dict.bugsBtn}</a>
          ${
            addon.links.wowinterface
              ? `<a href="${addon.links.wowinterface}" target="_blank" rel="noopener noreferrer" class="link-btn" style="grid-column: span 2;">WoWInterface</a>`
              : ""
          }
        </div>
      </div>
    `;
    gridEl.appendChild(card);
  });
}

async function fetchLiveVersions() {
  const cacheKey = "goover_addon_versions_v1";
  try {
    const cachedRaw = localStorage.getItem(cacheKey);
    if (cachedRaw) {
      const cached = JSON.parse(cachedRaw);
      if (Date.now() - cached.ts < 30 * 60 * 1000 && cached.data) {
        Object.assign(liveVersions, cached.data);
        renderAddons();
        return;
      }
    }
  } catch {
    // ignore storage errors
  }

  await Promise.allSettled(
    ADDONS.map(async (addon) => {
      try {
        const res = await fetch(`https://api.github.com/repos/${addon.links.repo}/releases/latest`, {
          headers: { Accept: "application/vnd.github+json" }
        });
        if (!res.ok) return;
        const data = await res.json();
        if (data && data.tag_name) {
          liveVersions[addon.id] = data.tag_name;
          const badge = document.querySelector(`[data-version-id="${addon.id}"]`);
          if (badge) badge.textContent = data.tag_name;
        }
      } catch {
        // fallback to static version silently
      }
    })
  );

  try {
    localStorage.setItem(cacheKey, JSON.stringify({ ts: Date.now(), data: liveVersions }));
  } catch {
    // ignore storage errors
  }
}

document.querySelectorAll(".pill").forEach((pill) => {
  pill.addEventListener("click", () => {
    document.querySelectorAll(".pill").forEach((p) => p.classList.remove("active"));
    pill.classList.add("active");
    currentFlavor = pill.getAttribute("data-flavor");
    renderAddons();
  });
});

searchEl.addEventListener("input", (e) => {
  currentQuery = e.target.value;
  renderAddons();
});

langToggleEl.addEventListener("click", () => {
  currentLang = currentLang === "en" ? "de" : "en";
  localStorage.setItem("goover_lang", currentLang);
  applyTranslations();
  renderAddons();
});

applyTranslations();
renderAddons();
fetchLiveVersions();
