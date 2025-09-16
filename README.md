# Atlist-Style Map (Google Maps API + Google Sheets + MarkerClusterer)

This package reproduces an Atlist-style map using **Google Maps JavaScript API**, **Google Sheets** for data, and **MarkerClusterer** for clustering, with a responsive sidebar, searchable/filterable index, custom icons, and SnazzyMaps styling.

## Live Preview Hosting
Host `index.html` anywhere static (e.g., **GitHub Pages**).

- GitHub Pages guide: https://docs.github.com/en/pages/quickstart
- Example final URL: `https://yourusername.github.io/utah-map/`

## 1) Prepare Your Google Sheet
1. Create a Google Sheet with these columns (header row, case-sensitive):
   ```
   Name | Address | Latitude | Longitude | Notes | Group | Use HTML | Button Link | Tags | Icon URL
   ```
2. Paste your data (from your CSV) into the sheet.
3. Share the sheet: **Share → General access → Anyone with the link (Viewer)**.
4. Copy the **Spreadsheet ID** (the long ID in URL like `https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit`).

## 2) Enable Google APIs
- Google Cloud Console: https://console.cloud.google.com/
- Enable:
  - **Maps JavaScript API**
  - **Google Sheets API**
- Create an **API key** (APIs & Services → Credentials).
- (Optional) Restrict the key later to your site domain (e.g., your GitHub Pages origin).

## 3) SnazzyMaps Style (Optional)
- Browse styles: https://snazzymaps.com/
- Click a style → `Copy JSON`.
- In `index.html` set: `CONFIG.MAP.styles = [ /* paste JSON array here */ ]`

## 4) Configure `index.html`
Open `index.html` and replace:
- `YOUR_MAPS_API_KEY` → your Google API key
- `YOUR_SHEET_ID` → your Google Sheet ID
- `CONFIG.SHEET.range` → tab name (e.g., `"Sheet1"`) or A1 range if you prefer
- Optionally set `ICONS_BY_GROUP` or use the `Icon URL` column per row

## 5) Marker Clusterer
Clustering is on by default (`CONFIG.UI.cluster = true`) and uses:
- Package: https://github.com/googlemaps/js-marker-clusterer
- CDN: `https://unpkg.com/@googlemaps/markerclusterer/dist/index.min.js`

## 6) Filters & Search
- **Group** filter: driven by the `Group` column.
- **Tags** filter: driven by comma-separated values in `Tags`, e.g. `food, family`.
- **Search**: matches Name, Group, Tags, and Notes (case-insensitive).
- **Near me**: requests geolocation permission, then sorts list by distance.

## 7) Custom Icons
- Per-row icon: add an `Icon URL` value (PNG/SVG) → overrides group icon.
- Per-group icon: set in `CONFIG.ICONS_BY_GROUP` (URL or Google Symbol config).

## 8) Popups
- Uses `Use HTML` boolean column. If `true`, your `Notes` content is injected as-is (no escaping). Otherwise, it is escaped to prevent HTML injection.

## 9) Deploy on GitHub Pages
1. Create a GitHub repo and commit `index.html`.
2. Repo Settings → Pages → Source = `main` and `/root`.
3. Open your live URL when Pages finishes building.

## 10) Useful Links
- Google Maps JavaScript API: https://developers.google.com/maps/documentation/javascript/overview
- Google Sheets API (values): https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/get
- Marker Clusterer: https://github.com/googlemaps/js-marker-clusterer
- SnazzyMaps: https://snazzymaps.com/
- GitHub Pages: https://docs.github.com/en/pages/quickstart

## Security Notes
- Keep your API key restricted (HTTP referrers). Do not expose write scopes; this uses only public-read Sheets values endpoint.
- Ensure your sheet is **View only** and contains no secrets.

---

If you want me to wire this to your exact Sheet and paste a SnazzyMaps style for you, just provide the Sheet ID and style JSON.

---

### Included in this bundle
- `google_sheets_template.csv` — cleaned, ready to import to Google Sheets.
- `google_sheets_template.xlsx` — same as above, in Excel format.
- `index.html` — preloaded with your SnazzyMaps style JSON.
