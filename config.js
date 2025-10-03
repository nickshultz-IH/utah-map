/* Simple, copy-friendly config for the map app */
window.APP_CONFIG = {
  // ---- Required ----
  GOOGLE_MAPS_API_KEY: "YOUR_GOOGLE_MAPS_API_KEY_HERE",

  SHEET: {
    id: "YOUR_SHEET_ID_HERE",
    range: "Sheet1!A:Z"
  },

  // ---- Optional UI flags ----
  UI: {
    hideControls: false, // true hides the search/sort/reset row
    hideFilters:  false  // true hides the Markets chips section
  }
};
