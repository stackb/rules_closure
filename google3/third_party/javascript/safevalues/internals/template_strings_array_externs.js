/**
 * @fileoverview Extern definitions for TemplateStringsArray
 * This provides the built-in JavaScript TemplateStringsArray type for Closure Compiler.
 */

/**
 * The template literal tag handler receives the template object as the first parameter.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates
 * @typedef {{
 *   length: number,
 *   raw: !Array<string>
 * }}
 */
var TemplateStringsArray;