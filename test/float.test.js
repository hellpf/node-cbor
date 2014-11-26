/*jslint node: true */
"use strict";

var cbor = require('../lib/cbor');

exports.create = function(test) {
  var u = new cbor.Float(1.1);
  test.deepEqual(u.value, 1.1);

  test.deepEqual(cbor.Float.isFloat(u), true);
  test.deepEqual(cbor.Float.isFloat("foo"), false);

  test.throws(function() {
    new cbor.Float("0");
  });
  test.throws(function() {
    new cbor.Float(false);
  });
  test.throws(function() {
    new cbor.Float({});
  });

  test.done();
};
