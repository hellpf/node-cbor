(function() {
  var Float, constants;

  constants = require('./constants');

  Float = (function() {
    function Float(value) {
      this.value = value;
      if (typeof this.value !== 'number') {
        throw new Error("Invalid Float type: " + (typeof this.value));
      }
    }

    Float.prototype.toString = function() {
      return "float(" + this.value + ")";
    };

    Float.prototype.getValue = function() {
      return this.value;
    };

    Float.isFloat = function(obj) {
      return obj instanceof Float;
    };

    return Float;

  })();

  module.exports = Float;

}).call(this);
