goog.provide('xid');

/**
 * ID generator for soy operations.
 * see {https://github.com/google/closure-templates/pull/182}
 * 
 * See the different kind of ID generators to use in https://github.com/google/closure-compiler/blob/5928c64a879c259fd524ba2cba452e8948a16874/test/com/google/javascript/jscomp/ReplaceIdGeneratorsTest.java#L468.
 *
 * @idGenerator {xid}
 * @param {string} id Un-rewritten ID to use.
 * @return {string} ID to use in code (potentially rewritten).
 */
xid = function (id) {
  return id;
};
