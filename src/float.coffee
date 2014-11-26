constants = require './constants'

class Float
  # Create a Float with the given value
  # @param value [Number] the number value
  constructor: (@value) ->
    unless typeof @value == 'number'
      throw new Error "Invalid Float type: #{typeof @value}"

  # Convert to a string
  # @return [String]
  toString: () ->
    "float(#{@value})"

  # @nodoc
  # @return [Number]
  getValue: () ->
    @value

  # Is the given object a Float?
  # @param obj the object to check
  # @return [Boolean]
  @isFloat = (obj) ->
    obj instanceof Float

module.exports = Float
