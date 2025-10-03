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
    hideControls: true, // true hides the search/sort/reset row
    hideFilters:  false  // true hides the Markets chips section
  }
};
