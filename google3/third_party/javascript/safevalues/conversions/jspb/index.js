/**
 * @fileoverview hand written shims for closed-source conversion functions
 * suppress {checkTypes}
 * suppress {extraRequire}
 * suppress {missingRequire}
 * suppress {uselessCode}
 * suppress {missingReturn}
 * suppress {unusedPrivateMembers}
 * suppress {missingOverride}
 * suppress {const}
 */
goog.module('google3.third_party.javascript.safevalues.conversions.jspb.index');

const SafeHtmlProto = goog.require('proto.webutil.html.types.SafeHtmlProto');
const SafeScriptProto = goog.require('proto.webutil.html.types.SafeScriptProto');
const SafeStyleProto = goog.require('proto.webutil.html.types.SafeStyleProto');
const SafeStyleSheetProto = goog.require('proto.webutil.html.types.SafeStyleSheetProto');
const SafeUrlProto = goog.require('proto.webutil.html.types.SafeUrlProto');
const TrustedResourceUrlProto = goog.require('proto.webutil.html.types.TrustedResourceUrlProto');

const { SafeHtml, TrustedResourceUrl, SafeScript, SafeStyleSheet } = goog.require('google3.third_party.javascript.safevalues.index');
const { createHtmlInternal } = goog.require('google3.third_party.javascript.safevalues.internals.html_impl');

/**
 * @param {!SafeHtml} html
 * @return {!SafeHtmlProto}
 */
function htmlToProto(html) {
    const proto = new SafeHtmlProto();
    return proto;
}
exports.htmlToProto = htmlToProto;


/**
 * @param {!SafeHtmlProto} proto
 * @return {!SafeHtml}
 */
function protoToHtml(proto) {
    return createHtmlInternal();
}
exports.protoToHtml = protoToHtml;


/**
 * @param {!TrustedResourceUrlProto} url
 * @return {!TrustedResourceUrl}
 */
function protoToResourceUrl(url) {

}
exports.protoToResourceUrl = protoToResourceUrl;


/**
 * @param {!SafeScriptProto} proto
 * @return {!SafeScript}
 */
function protoToScript(proto) {

}
exports.protoToScript = protoToScript;


/**
 * @param {!SafeStyleProto} proto
 * @return {!string} raw css string
 */
function protoToStyle(proto) {
    const s = proto.getStyle();
    return s;
}
exports.protoToStyle = protoToStyle;


/**
 * @param {!SafeStyleSheetProto} proto
 * @return {!SafeStyleSheet}
 */
function protoToStyleSheet(proto) {

}
exports.protoToStyleSheet = protoToStyleSheet;


/**
 * @param {!SafeUrlProto} proto
 * @return {!string} unsure if this is the correct type!
 */
function protoToUrl(proto) {
}
exports.protoToUrl = protoToUrl;


/**
 * @param {!TrustedResourceUrl} url
 * @return {!TrustedResourceUrlProto}
 */
function resourceUrlToProto(url) {

}
exports.resourceUrlToProto = resourceUrlToProto;


/**
 * @param {!SafeScript} script
 * @return {!SafeScriptProto}
 */
function scriptToProto(script) {

}
exports.scriptToProto = scriptToProto;


/**
 * @param {!SafeStyleSheet} styleSheet
 * @return {!SafeStyleSheetProto}
 */
function styleSheetToProto(styleSheet) {

}
exports.styleSheetToProto = styleSheetToProto;


/**
 * @param {!string} style
 * @return {!SafeStyleProto}
 */
function styleToProto(style) {

}
exports.styleToProto = styleToProto;


/**
 * @param {!string} url
 * @return {!SafeUrlProto}
 */
function urlToProto(url) {

}
exports.urlToProto = urlToProto;
