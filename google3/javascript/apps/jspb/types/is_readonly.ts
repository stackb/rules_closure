// Usage:
// /**
//  * Wrapper for JSPB's isReadonly.
//  * @param {?} ctor JSPB constructor.
//  * @param {?} msg JSPB instance.
//  * @return {boolean}
//  */
// const $$isReadonly = function (ctor, msg) {
//   const guard = /** @type {function(?): boolean} */ (isReadonly(ctor));
//   return guard(msg);
// };

export function isReadonly(ctor: unknown): ((msg: any) => boolean) {
    return (msg: any) => false;
}
