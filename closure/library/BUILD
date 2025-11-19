# Copyright 2025 The Closure Rules Authors. All rights reserved.
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

load("//closure/compiler:closure_js_library.bzl", "closure_js_library")

package(default_visibility = ["//visibility:public"])

licenses(["notice"])

closure_js_library(
    name = "reflect",
    # TODO(goktug): replace with reflect.js from compiler when included in the artifact.
    srcs = ["reflect.js"],
    lenient = True,
)

closure_js_library(
    name = "long",
    srcs = ["long.js"],
)

closure_js_library(
    name = "testing",
    testonly = True,
    exports = [
        "//closure/goog/crypt:hashtester",
        "//closure/goog/events:eventtargettester",
        "//closure/goog/html:testing",
        "//closure/goog/promise:testsuiteadapter",
        "//closure/goog/storage:collectablestoragetester",
        "//closure/goog/storage:storagetester",
        "//closure/goog/style:stylescrollbartester",
        "//closure/goog/testing:assertionfailure",
        "//closure/goog/testing:asserts",
        "//closure/goog/testing:asynctestcase",
        "//closure/goog/testing:benchmark",
        "//closure/goog/testing:continuationtestcase",
        "//closure/goog/testing:deferredtestcase",
        "//closure/goog/testing:dom",
        "//closure/goog/testing:expectedfailures",
        "//closure/goog/testing:functionmock",
        "//closure/goog/testing:graphics",
        "//closure/goog/testing:jstdtestcaseadapter",
        "//closure/goog/testing:jsunit",
        "//closure/goog/testing:jsunitexception",
        "//closure/goog/testing:loosemock",
        "//closure/goog/testing:mock",
        "//closure/goog/testing:mockclassfactory",
        "//closure/goog/testing:mockclock",
        "//closure/goog/testing:mockcontrol",
        "//closure/goog/testing:mockinterface",
        "//closure/goog/testing:mockmatchers",
        "//closure/goog/testing:mockrandom",
        "//closure/goog/testing:mockrange",
        "//closure/goog/testing:mockstorage",
        "//closure/goog/testing:mockuseragent",
        "//closure/goog/testing:multitestrunner",
        "//closure/goog/testing:objectpropertystring",
        "//closure/goog/testing:performancetable",
        "//closure/goog/testing:performancetimer",
        "//closure/goog/testing:propertyreplacer",
        "//closure/goog/testing:pseudorandom",
        "//closure/goog/testing:recordfunction",
        "//closure/goog/testing:shardingtestcase",
        "//closure/goog/testing:singleton",
        "//closure/goog/testing:stacktrace",
        "//closure/goog/testing:strictmock",
        "//closure/goog/testing:testcase",
        "//closure/goog/testing:testqueue",
        "//closure/goog/testing:testrunner",
        "//closure/goog/testing:testsuite",
        "//closure/goog/testing/async:mockcontrol",
        "//closure/goog/testing/editor:dom",
        "//closure/goog/testing/editor:fieldmock",
        "//closure/goog/testing/editor:testhelper",
        "//closure/goog/testing/events",
        "//closure/goog/testing/events:eventobserver",
        "//closure/goog/testing/events:matchers",
        "//closure/goog/testing/events:onlinehandler",
        "//closure/goog/testing/fs",
        "//closure/goog/testing/fs:blob",
        "//closure/goog/testing/fs:entry",
        "//closure/goog/testing/fs:file",
        "//closure/goog/testing/fs:filereader",
        "//closure/goog/testing/fs:filesystem",
        "//closure/goog/testing/fs:filewriter",
        "//closure/goog/testing/fs:progressevent",
        "//closure/goog/testing/i18n:asserts",
        "//closure/goog/testing/messaging:mockmessagechannel",
        "//closure/goog/testing/messaging:mockmessageevent",
        "//closure/goog/testing/messaging:mockmessageport",
        "//closure/goog/testing/messaging:mockportnetwork",
        "//closure/goog/testing/net:mockiframeio",
        "//closure/goog/testing/net:xhrio",
        "//closure/goog/testing/net:xhriopool",
        "//closure/goog/testing/proto2",
        "//closure/goog/testing/storage:fakemechanism",
        "//closure/goog/testing/style",
        "//closure/goog/testing/style:layoutasserts",
        "//closure/goog/tweak:testhelpers",
    ],
)
