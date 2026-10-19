/**
 * PimiUI Engine - Tailwind CSS Plugin
 * Integrates 3-level dark mode, concentric math, and spring physics into Tailwind.
 */

const tokens = require("./tokens.json");

function pimiuiPlugin({ addUtilities, theme }) {
  const colors = tokens.colors;

  addUtilities({
    ".bg-pimi-level-1": { backgroundColor: colors.background.level1 },
    ".bg-pimi-level-2": { backgroundColor: colors.background.level2 },
    ".bg-pimi-level-3": { backgroundColor: colors.background.level3 },
    ".text-pimi-primary": { color: colors.text.primary },
    ".text-pimi-secondary": { color: colors.text.secondary },
    ".text-pimi-muted": { color: colors.text.muted },
    ".border-pimi-subtle": { borderColor: colors.border.subtle },
    ".border-pimi-medium": { borderColor: colors.border.medium },
    ".border-pimi-active": { borderColor: colors.border.active },
    ".tabular-nums": { fontVariantNumeric: "tabular-nums" },
    ".spring-snappy": {
      transitionTimingFunction: tokens.physics.spring.snappy.cubicBezier,
    },
    ".spring-gentle": {
      transitionTimingFunction: tokens.physics.spring.gentle.cubicBezier,
    },
  });
}

/**
 * Calculates concentric inner border radius given outer radius and container padding:
 * R_inner = max(0, R_outer - Padding)
 */
function concentricRadius(outerRadiusPx, paddingPx) {
  return Math.max(0, outerRadiusPx - paddingPx);
}

module.exports = pimiuiPlugin;
module.exports.tokens = tokens;
module.exports.concentricRadius = concentricRadius;
