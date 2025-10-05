/**
 * @fileoverview Shim to provide jspb namespace for Soy-generated code.
 * This allows destructuring imports like `const { Message } = goog.requireType('jspb');`
 */

goog.module('jspb');

// Import the actual jspb module
const Message = goog.require('jspb.Message');
const BinaryReader = goog.require('jspb.BinaryReader');
const BinaryWriter = goog.require('jspb.BinaryWriter');
const ByteSource = goog.require('jspb.ByteSource');

// Re-export all the types and functions that Soy templates expect
exports.Message = Message;
exports.BinaryReader = BinaryReader;
exports.BinaryWriter = BinaryWriter;
exports.ByteSource = ByteSource;