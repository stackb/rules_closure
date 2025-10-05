/**
 * @fileoverview Shim to provide safevalues namespace for Soy-generated code.
 * This allows destructuring imports like `const { SafeHtml } = goog.requireType('safevalues');`
 */

goog.module('safevalues');

// Import the actual safevalues modules
const { SafeHtml, SafeScript, SafeStyleSheet, TrustedResourceUrl, SafeUrl } = goog.require('google3.third_party.javascript.safevalues.index');

// Re-export all the types that Soy templates expect
exports.SafeHtml = SafeHtml;
exports.SafeScript = SafeScript;
exports.SafeStyleSheet = SafeStyleSheet;
exports.TrustedResourceUrl = TrustedResourceUrl;
exports.SafeUrl = SafeUrl;