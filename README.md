# MREC Pit Shell Generator

**Ultimate Pit Optimisation Platform** for MREC Iberico

A browser-based open pit optimisation tool that implements the Lerchs-Grossmann algorithm to generate economic pit shells from block model data. Compliant with JORC, SAMREC, and NI 43-101 reporting standards.

---

## Contents

```
mrec-pit-shell-generator/
├── index.html          — Main application (single-file, runs offline)
├── credentials.js      — User authentication configuration
└── README.md           — This file
```

---

## Getting Started

### Option 1 — Open locally
1. Place `index.html` and `credentials.js` in the same folder
2. Open `index.html` in Chrome, Edge, or Firefox
3. Log in with credentials defined in `credentials.js`

### Option 2 — Host on GitHub Pages
1. Push this folder to a GitHub repository
2. Go to **Settings → Pages → Source → main branch / root**
3. Your app will be available at `https://yourusername.github.io/repo-name`

> **Important:** `index.html` and `credentials.js` must always be in the same directory.

---

## Managing Users

Edit `credentials.js` to add, remove, or change users:

```js
const USERS = [
  { username: "patrick", password: "yourpassword" },
  { username: "client1", password: "anotherpassword" },
];
```

Save the file and reload the page. Changes take effect immediately.

---

## Workflow

1. **Load Block Model** — Upload a CSV file containing block centroids (X, Y, Z), metal grade, ore tonnes, waste tonnes, and optionally recovery, mining cost, and processing cost columns
2. **Map Columns** — Assign CSV columns to the required fields
3. **Set Cell Dimensions** — Define block size in X, Y, and Z (auto-detected from data)
4. **Economic Parameters** — Enter sales price, mining cost, processing cost, recovery, and slope angle
5. **Run LG Optimisation** — Executes the Lerchs-Grossmann greedy cone algorithm
6. **View Results** — Interactive 3D viewer with grade-coloured point cloud and transparent pit shell
7. **Export** — Download pit shell as CSV (triangulated mesh) or DXF (AutoCAD R12 3DFACE entities)

---

## Block Model CSV Format

Minimum required columns:

| Column | Description |
|--------|-------------|
| X | Block centroid Easting (m) |
| Y | Block centroid Northing (m) |
| Z | Block centroid Elevation (m) |
| Grade | Metal grade (g/t, ppm, or %) |
| Ore Tonnes | Ore mass per block (t) |
| Waste Tonnes | Waste mass per block (t) |

Optional columns (or use fixed rates):

| Column | Description |
|--------|-------------|
| Recovery | Metallurgical recovery (fraction or %) |
| Mining Cost | Pre-calculated total mining cost per block ($) |
| Processing Cost | Pre-calculated total processing cost per block ($) |

---

## 3D Viewer Controls

| Action | Control |
|--------|---------|
| Rotate | Left-click + drag |
| Pan | Right-click + drag |
| Zoom | Scroll wheel |
| Set pivot | Double-click on model |
| Reset view | ⌂ button |

---

## Export Formats

- **CSV** — One row per triangle: `TriangleID, V1_X, V1_Y, V1_Z, V2_X, V2_Y, V2_Z, V3_X, V3_Y, V3_Z`
- **DXF** — AutoCAD R12 (AC1009) format with `3DFACE` entities on layer `PIT_SHELL`. Compatible with Geoscience Analyst, Leapfrog, Surpac, Vulcan, MicroStation, AutoCAD.

---

## Technical Notes

- All computation runs entirely in the browser — no data is sent to any server
- Requires an internet connection only to load fonts and Three.js from CDN
- Tested in Chrome 120+, Edge 120+, Firefox 121+
- Block models up to ~400,000 blocks supported

---

## Limitations & Known Constraints

- The greedy LG implementation is an approximation of the true Lerchs-Grossmann graph closure. Results may differ from commercial software (Whittle, MiningMath) particularly for deposits with asymmetric block geometries
- The Minimum Mining Width post-processor fills inward notches at the pit crest but does not remove outward fingers (peninsulas connected to the main pit via thin necks)
- Strip ratio is sensitive to block cell aspect ratio — narrow Y-spacing relative to X creates wide slope cones

---

*Built by Obsidian Consulting Services for MREC Iberico*
