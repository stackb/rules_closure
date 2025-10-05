/**
 * @license
 * Copyright Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Typings for Trusted Types APIs.
 * See https://w3c.github.io/trusted-types/dist/spec/ for details.
 * These definitions should be replaced by lib.dom.d.ts once it is available.
 */

goog.module('google3.third_party.javascript.safevalues.internals.trusted_types_typings');

/** https://w3c.github.io/trusted-types/dist/spec/#trusted-html 
 * @constructor
 */
function TrustedHTML() {
  // To prevent instantiting with 'new'.
}

/** https://w3c.github.io/trusted-types/dist/spec/#trusted-script 
 * @constructor
 */
function TrustedScript() {
  // To prevent instantiting with 'new'.
}

/** https://w3c.github.io/trusted-types/dist/spec/#trusted-script-url 
 * @constructor
 */
function TrustedScriptURL() {
  // To prevent instantiting with 'new'.
}

/** https://w3c.github.io/trusted-types/dist/spec/#trusted-types-policy 
 * @interface
 */
function TrustedTypePolicy() { }

/**
 * @param {string} str
 * @return {!TrustedHTML}
 */
TrustedTypePolicy.prototype.createHTML = function (str) { };

/**
 * @param {string} str
 * @return {!TrustedScript}
 */
TrustedTypePolicy.prototype.createScript = function (str) { };

/**
 * @param {string} str
 * @return {!TrustedScriptURL}
 */
TrustedTypePolicy.prototype.createScriptURL = function (str) { };

/** https://w3c.github.io/trusted-types/dist/spec/#trusted-types-policy-options 
 * @interface
 */
function TrustedTypePolicyOptions() { }

/**
 * @param {string} str
 * @return {string}
 */
TrustedTypePolicyOptions.prototype.createHTML = function (str) { };

/**
 * @param {string} str
 * @return {string}
 */
TrustedTypePolicyOptions.prototype.createScript = function (str) { };

/**
 * @param {string} str
 * @return {string}
 */
TrustedTypePolicyOptions.prototype.createScriptURL = function (str) { };

/** https://w3c.github.io/trusted-types/dist/spec/#trusted-types-policy-factory 
 * @interface
 */
function TrustedTypePolicyFactory() { }

/**
 * @param {string} name
 * @param {!TrustedTypePolicyOptions} policy
 * @return {!TrustedTypePolicy}
 */
TrustedTypePolicyFactory.prototype.createPolicy = function (name, policy) { };

/** @type {!TrustedHTML} */
TrustedTypePolicyFactory.prototype.emptyHTML;

/** @type {!TrustedScript} */
TrustedTypePolicyFactory.prototype.emptyScript;

/** https://w3c.github.io/trusted-types/dist/spec/#extensions-to-the-windoworworkerglobalscope-interface 
 * @typedef {{trustedTypes: (TrustedTypePolicyFactory|undefined)}}
 */
var GlobalWithTrustedTypes;

// Export the types for module usage
exports.TrustedHTML = TrustedHTML;
exports.TrustedScript = TrustedScript;
exports.TrustedScriptURL = TrustedScriptURL;
exports.TrustedTypePolicy = TrustedTypePolicy;
exports.TrustedTypePolicyOptions = TrustedTypePolicyOptions;
exports.TrustedTypePolicyFactory = TrustedTypePolicyFactory;
exports.GlobalWithTrustedTypes = GlobalWithTrustedTypes;