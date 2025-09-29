# Copyright 2016 The Closure Rules Authors. All rights reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

load("@rules_java//java:defs.bzl", "java_library")
load(
    "//closure:defs.bzl",
    "closure_js_library",
    # "closure_js_proto_library",
)
load("@build_stack_rules_proto//rules:proto_compile.bzl", "proto_compile")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

java_library(
    name = "templates",
    exports = ["@com_google_template_soy"],
)

# closure_js_proto_library(
#     name = "soy_html_proto",
#     srcs = ["@com_google_common_html_types_html_proto//file"],
# )

closure_js_library(
    name = "soy_jssrc",
    srcs = [
        # "@com_google_closure_templates//javascript:onefile",
        "@com_google_closure_templates//javascript:goog",
    ],
    lenient = True,
    deps = [
        ":html_js",
        "//closure/goog/array",
        "//closure/goog/asserts",
        "//closure/goog/debug",
        "//closure/goog/dom",
        "//closure/goog/format",
        "//closure/goog/html:safehtml",
        "//closure/goog/html:safescript",
        "//closure/goog/html:safestyle",
        "//closure/goog/html:safestylesheet",
        "//closure/goog/html:safeurl",
        "//closure/goog/html:trustedresourceurl",
        "//closure/goog/html:uncheckedconversions",
        "//closure/goog/i18n:bidi",
        "//closure/goog/i18n:bidiformatter",
        "//closure/goog/i18n:messageformat",
        "//closure/goog/i18n:numberformat",
        "//closure/goog/object",
        "//closure/goog/soy",
        "//closure/goog/soy:data",
        "//closure/goog/soy:renderer",
        "//closure/goog/string",
        "//closure/goog/string:const",
        "//closure/goog/uri",
        "//closure/protobuf:jspb",
    ],
)

proto_compile(
    name = "html_js_proto",
    outputs = ["html.js"],
    plugins = ["//closure/protobuf:protoc-gen-js"],
    proto = "@com_google_closure_templates//third_party/google/safe-html-types/proto/webutil/html/types:html_proto",
    visibility = ["//visibility:public"],
)

closure_js_library(
    name = "html_js",
    srcs = ["html.js"],
    deps = [
        "//closure/protobuf:jspb",
    ],
)
