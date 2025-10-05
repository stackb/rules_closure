# tslib package

The `tslib` dependency is needed when safevalues uses typescript language features like templated functions.  The code itself originates from `angular/tsickle` which is vendored into `@rules_tsickle`, and exposed as a `closure_js_library` here.

`tscc` also uses this, with local modifications (see `packages/tscc/third_party/tsickle/third_party/tslib/tslib.js`).