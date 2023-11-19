const chai = require("chai");
let assert = chai.assert;
const ConvertHandler = require("../controllers/convertHandler.js");

let convertHandler = new ConvertHandler();

suite("Unit Tests", function () {
  // TODO: convertHandler should correctly read a whole number input.
  test("convertHandler should correctly read a whole number input.", function () {
    assert.isNotNull(convertHandler.getNum("1L"), "1 is not null");
    assert.typeOf(convertHandler.getNum("1L"), "number");
    assert.isNotNull(convertHandler.getNum("1123mi"), "1123 is not null");
    assert.typeOf(convertHandler.getNum("1123mi"), "number");
    assert.isNotNull(convertHandler.getNum("75671lbs"), "75671 is not null");
    assert.typeOf(convertHandler.getNum("75671lbs"), "number");
  });
  // TODO: convertHandler should correctly read a decimal number input.
  test("convertHandler should correctly read a decimal number input.", function () {
    assert.isNotNull(convertHandler.getNum("1.01L"), "1.01 is not null");
    assert.typeOf(convertHandler.getNum("1.0L"), "number");
    assert.isNotNull(convertHandler.getNum("0.1123mi"), "0.1123 is not null");
    assert.typeOf(convertHandler.getNum("0.1123mi"), "number");
    assert.isNotNull(convertHandler.getNum("756.71lbs"), "756.71 is not null");
    assert.typeOf(convertHandler.getNum("756.71lbs"), "number");
  });
  // TODO: convertHandler should correctly read a fractional input.
  test("convertHandler should correctly read a fractional input.", function () {
    assert.isNotNull(convertHandler.getNum("1/2L"), "1/2 is not null");
    assert.typeOf(convertHandler.getNum("1/2L"), "number");
    assert.isNotNull(convertHandler.getNum("4/2mi"), "4/2 is not null");
    assert.typeOf(convertHandler.getNum("4/2mi"), "number");
    assert.isNotNull(convertHandler.getNum("3/4lbs"), "3/4 is not null");
    assert.typeOf(convertHandler.getNum("3/4lbs"), "number");
  });
  // TODO: convertHandler should correctly read a fractional input with a decimal.
  test("convertHandler should correctly read a fractional input with a decimal.", function () {
    assert.isNotNull(convertHandler.getNum("1.0/2L"), "1.0/2 is not null");
    assert.typeOf(convertHandler.getNum("1.0/2L"), "number");
    assert.isNotNull(convertHandler.getNum("4/2.2mi"), "4/2.2 is not null");
    assert.typeOf(convertHandler.getNum("4/2.2mi"), "number");
    assert.isNotNull(convertHandler.getNum("3.2/1.6lbs"), "3.2/1.6 is not null");
    assert.typeOf(convertHandler.getNum("3.2/1.6lbs"), "number");
  });
  // TODO: convertHandler should correctly return an error on a double-fraction (i.e. 3/2/3).
  test("convertHandler should correctly return an error on a double-fraction (i.e. 3/2/3).", function () {
    assert.throws(() => convertHandler.getNum("3/2/3L"), Error);
    assert.throws(() => convertHandler.getNum("4.2/2/3.1mi"), Error);
    assert.throws(() => convertHandler.getNum("5.7/1.2/9.3kg"), Error);
  });
  // TODO: convertHandler should correctly default to a numerical input of 1 when no numerical input is provided.
  test("convertHandler should correctly default to a numerical input of 1 when no numerical input is provided.", function () {
    assert.isNotNull(convertHandler.getNum("L"), "1 is not null");
    assert.typeOf(convertHandler.getNum("L"), "number");
    assert.equal(convertHandler.getNum("L"), 1);
    assert.isNotNull(convertHandler.getNum("kg"), "1 is not null");
    assert.typeOf(convertHandler.getNum("kg"), "number");
    assert.equal(convertHandler.getNum("kg"), 1);
    assert.isNotNull(convertHandler.getNum("mi"), "1 is not null");
    assert.typeOf(convertHandler.getNum("mi"), "number");
    assert.equal(convertHandler.getNum("mi"), 1);
  });
  // TODO: convertHandler should correctly read each valid input unit.
  test("convertHandler should correctly read each valid input unit.", function () {
    assert.strictEqual(convertHandler.getUnit("5.2gal"), "gal");
    assert.doesNotThrow(() => convertHandler.getUnit("5.2gal"), Error);
    assert.strictEqual(convertHandler.getUnit("12l"), "L");
    assert.doesNotThrow(() => convertHandler.getUnit("12l"), Error);
    assert.strictEqual(convertHandler.getUnit("3/2mi"), "mi");
    assert.doesNotThrow(() => convertHandler.getUnit("3/2mi"), Error);
    assert.strictEqual(convertHandler.getUnit("4.5/2km"), "km");
    assert.doesNotThrow(() => convertHandler.getUnit("4.5/2km"), Error);
    assert.strictEqual(convertHandler.getUnit("4.5/2.0lbs"), "lbs");
    assert.doesNotThrow(() => convertHandler.getUnit("4.5/2.0lbs"), Error);
    assert.strictEqual(convertHandler.getUnit("42.12lbs"), "lbs");
    assert.doesNotThrow(() => convertHandler.getUnit("42.12lbs"), Error);
  });
  // TODO: convertHandler should correctly return an error for an invalid input unit.
  test("convertHandler should correctly return an error for an invalid input unit.", function () {
    assert.throws(() => convertHandler.getUnit("3/2/3Li"), Error);
    assert.throws(() => convertHandler.getUnit("4.2/2/3.1mil"), Error);
    assert.throws(() => convertHandler.getUnit("5.7/1.2/9.3kgr"), Error);
  });
  // TODO: convertHandler should return the correct return unit for each valid input unit.
  test("convertHandler should return the correct return unit for each valid input unit.", function () {
    assert.strictEqual(convertHandler.getReturnUnit("L"), "gal");
    assert.strictEqual(convertHandler.getReturnUnit("gal"), "L");
    assert.strictEqual(convertHandler.getReturnUnit("kg"), "lbs");
    assert.strictEqual(convertHandler.getReturnUnit("lbs"), "kg");
    assert.strictEqual(convertHandler.getReturnUnit("km"), "mi");
    assert.strictEqual(convertHandler.getReturnUnit("mi"), "km");
  });
  // TODO: convertHandler should correctly return the spelled-out string unit for each valid input unit.
  // TODO: convertHandler should correctly convert gal to L.
  // TODO: convertHandler should correctly convert L to gal.
  // TODO: convertHandler should correctly convert mi to km.
  // TODO: convertHandler should correctly convert km to mi.
  // TODO: convertHandler should correctly convert lbs to kg.
  // TODO: convertHandler should correctly convert kg to lbs.
});
