load("@rules_tsickle//rules:defs.bzl", "closure_ts_compile")
load("//closure:defs.bzl", "closure_js_library")

def closure_ts_library(name, srcs, deps = [], **kwargs):
    closure_ts_compile(
        name = name + "_ts",
        srcs = srcs,
        visibility = [
            "//google3/third_party/javascript/safevalues:__subpackages__",
        ],
        deps = [
            "//google3/third_party/javascript/safevalues/builders",
            "//google3/third_party/javascript/safevalues/internals",
        ],
    )
    closure_js_library(
        name = name,
        srcs = [name + "_ts"],
        lenient = True,
        visibility = ["//visibility:public"],
        deps = deps,
    )
