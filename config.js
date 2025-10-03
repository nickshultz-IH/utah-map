/* Simple, copy-friendly config for the map app */
window.APP_CONFIG = {
  // ---- Required ----
  GOOGLE_MAPS_API_KEY: "AIzaSyAYvECoY90cl8YQwhKiBwEBKqW_zrK1AQY",

  SHEET: {
    id: "1cd3VUWQKs3zB68Ji-JXVjJkqyXi87KOoSErjypixD4I",
    range: "Sheet1!A:Z"
  },

  // ---- Optional UI flags ----
  UI: {
    hideControls: false, // true hides the search/sort/reset row
    hideFilters:  true  // true hides the Markets chips section
  },

   // Optional branding & assets base (both default to relative paths)
  LOGO_URL: "logo-light.png",   // put your logo file next to index.html (or set a full/absolute URL)
  ASSETS_BASE: "https://nickshultz-ih.github.io/utah-map/",              // e.g. "", "./assets/", or "https://cdn.example.com/ih/"

     // Icon token mapping (filenames only; will be prefixed by ASSETS_BASE)
  ICON_TOKENS: {
    cobalt:   "map-marker-cobalt.png",
    coral:    "map-marker-coral.png",
    darkblue: "map-marker-darkblue.png",
    dark:     "map-marker-darkblue.png",
    softblue: "map-marker-softblue.png",
    soft:     "map-marker-softblue.png"
  },
  ICONS_BY_GROUP: {
    "Cobalt":    "map-marker-cobalt.png",
    "Coral":     "map-marker-coral.png",
    "Dark Blue": "map-marker-darkblue.png",
    "Soft Blue": "map-marker-softblue.png"
  }
};
