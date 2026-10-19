/**
 * Unit tests for PimiUI tokens and concentric radius math.
 * Pure Node.js (assert).
 */

const assert = require("assert");
const tokens = require("../src/tokens.json");
const { concentricRadius } = require("../src/tailwind-plugin.js");

console.log("Running PimiUI tokens tests...");

// 1. Verify 3-level dark mode scale
assert.strictEqual(tokens.colors.background.level1, "#0B1220");
assert.strictEqual(tokens.colors.background.level2, "#0F1A2A");
assert.strictEqual(tokens.colors.background.level3, "#131F30");

// 2. Verify spring physics
assert.ok(tokens.physics.spring.snappy.stiffness > 200);
assert.ok(tokens.physics.spring.gentle.damping > 20);

// 3. Verify concentric radius calculation
// Example: Card radius 16px, padding 12px -> Inner button radius should be 4px
assert.strictEqual(concentricRadius(16, 12), 4);
assert.strictEqual(concentricRadius(12, 16), 0); // No negative radius

console.log("✅ All PimiUI token tests passed successfully!");
