<div align="center">

# 🎨 PimiUI-Tokens
### **The Anti-AI-Slop Design Token & Motion Physics Engine**
*Eradicating Generic AI Web Interfaces through Intentional Depth, Layered Shadows, and Spring Dynamics.*

[![License: MIT](https://img.shields.io/badge/License-MIT-0B1220?style=for-the-badge&logoColor=white)](LICENSE)
[![Format: CSS & Tailwind](https://img.shields.io/badge/Format-CSS_%26_Tailwind-0B1220?style=for-the-badge&logo=tailwindcss&logoColor=38BDF8)](package.json)
[![Zero Bloat: Pure CSS](https://img.shields.io/badge/Bloat-Zero_External_Libs-0B1220?style=for-the-badge&logoColor=10B981)](src/pimiui.css)
[![Architecture: PSTACK](https://img.shields.io/badge/PSTACK-Mandate_5_Compliant-0B1220?style=for-the-badge&logoColor=F59E0B)](https://github.com/sinergiefek)

---

> *"The modern web has drowned in AI-generated template slop: default Inter fonts, purple-to-blue gradients, and lifeless linear tweens. PimiUI restores intentionality, layered dark-mode depth, and biological spring physics."*

</div>

---

### 👁️ The 4 Anti-AI-Slop Commandments

#### 1. The Three-Level Dark Mode Scale
Generic AI tools use pitch-black `#000000` or washed-out gray `#121212`. PimiUI defines a mathematically calibrated 3-tier navy depth:
* **Level 1 (`#0B1220`):** The Page Void. Root canvas that minimizes eye fatigue.
* **Level 2 (`#0F1A2A`):** The Section Shelf. Sidebars, pinned headers, and contextual bands.
* **Level 3 (`#131F30`):** The Elevated Surface. Interactive cards and command modals.

#### 2. Tinted Shadow System (Organic Physics)
Dull drop-shadows are banned. PimiUI injects the brand's primary frequency (`rgba(56, 189, 248, 0.08)`) directly into layered shadows, combined with snappy spring hover curves (`cubic-bezier(0.175, 0.885, 0.32, 1.275)`).

#### 3. Concentric Radius Geometry
Inner elements nested inside rounded cards should never have arbitrary border radii. PimiUI enforces concentric mathematics:
$$R_{\text{inner}} = \max(0, R_{\text{outer}} - \text{Padding})$$

#### 4. Tabular Numerics & Tightened Headers
All financial metrics, live tickers, and counter elements strictly enforce `font-variant-numeric: tabular-nums` to eliminate layout jitter. Executive headers enforce `-0.025em` tracking for maximum authority.

---

### 🚀 Quickstart

#### Option A: Pure CSS (Zero Tooling)

Import `pimiui.css` directly into your HTML or CSS bundle:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@sinergiefek/pimiui-tokens/src/pimiui.css">

<!-- Example Card -->
<div class="pimi-card pimi-hover-lift">
  <span class="pimi-eyebrow">Enterprise Telemetry</span>
  <h2 class="pimi-header">Deterministic Swarm</h2>
  <p class="pimi-tabular-nums">$1,420,900.00</p>
</div>
```

#### Option B: Tailwind CSS Plugin

Install and configure with your Tailwind pipeline:

```bash
npm install @sinergiefek/pimiui-tokens
```

In your `tailwind.config.js`:
```javascript
module.exports = {
  plugins: [
    require('@sinergiefek/pimiui-tokens')
  ]
};
```

Use PimiUI utility classes directly:
```html
<div class="bg-pimi-level-1 text-pimi-primary min-h-screen p-8">
  <div class="bg-pimi-level-3 border border-pimi-subtle rounded-xl p-6 shadow-lg spring-snappy hover:-translate-y-1">
    <p class="text-xs uppercase tracking-widest text-sky-400 font-semibold">Mesh Node</p>
    <h3 class="text-xl font-bold tracking-tight">Active Shard</h3>
    <p class="tabular-nums text-2xl font-mono text-emerald-400 mt-2">99.999% SLA</p>
  </div>
</div>
```

---

### 📐 Concentric Math Helper (TypeScript / JavaScript)

```javascript
import { concentricRadius } from '@sinergiefek/pimiui-tokens';

// Outer card with 16px radius and 12px padding:
const innerRadius = concentricRadius(16, 12); // Returns 4px
```

---

### 🏢 Open Core Ecosystem

| Primitive | Community (MIT) | Enterprise Design System |
| :--- | :---: | :---: |
| 3-Level Dark Mode CSS Tokens | ✅ | ✅ |
| Spring Physics Curves & Delays | ✅ | ✅ |
| Concentric Math Primitives | ✅ | ✅ |
| Tailwind CSS Plugin | ✅ | ✅ |
| **Whitelabel Multi-Brand Theming Engine** | ❌ | 👑 **Enterprise** |
| **Turnkey Command Center & Financial UI Kits** | ❌ | 👑 **Enterprise** |
| **High-Performance ECharts Dark Theme** | ❌ | 👑 **Enterprise** |
| **Audit Protocol for Web Accessibility (WCAG AAA)**| ❌ | 👑 **Enterprise** |

For Enterprise UI/UX systems architecture and custom B2B theme engineering, visit [Sinergi Mitra Visitama](https://sinergimitravisitama.my.id).

---

### 📄 License

Licensed under the permissive [MIT License](LICENSE).  
Copyright (c) 2026 Setijono (Sinergi Mitra Visitama).
