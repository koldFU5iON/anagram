// global config file so each test does not need to be configured
// you can probably leave this file alone

var chai = require('chai');

// although you will probably only choose one style
// assert, expect, and should are all here

global.assert = chai.assert;
global.expect = chai.expect;

chai.config.includeStack = true;
