const chai = require("chai");
let assert = chai.assert;
const ConvertHandler = require("../controllers/convertHandler.js");

let convertHandler = new ConvertHandler();

suite("Unit Tests", function () {
  // convertHandler should correctly read a whole number input.
  test("convertHandler should correctly read a whole number input.", function () {
    assert.strictEqual(convertHandler.getNum("1L"), 1);
    assert.strictEqual(convertHandler.getNum("1123mi"), 1123);
    assert.strictEqual(convertHandler.getNum("75671lbs"), 75671);
  });
  // convertHandler should correctly read a decimal number input.
  test("convertHandler should correctly read a decimal number input.", function () {
    assert.strictEqual(convertHandler.getNum("1.0L"), 1.0);
    assert.strictEqual(convertHandler.getNum("0.1123mi"), 0.1123);
    assert.strictEqual(convertHandler.getNum("756.71lbs"), 756.71);
  });
  // convertHandler should correctly read a fractional input.
  test("convertHandler should correctly read a fractional input.", function () {
    assert.strictEqual(convertHandler.getNum("1/2L"), 0.5);
    assert.strictEqual(convertHandler.getNum("4/2mi"), 2);
    assert.strictEqual(convertHandler.getNum("3/4lbs"), 0.75);
  });
  // convertHandler should correctly read a fractional input with a decimal.
  test("convertHandler should correctly read a fractional input with a decimal.", function () {
    assert.strictEqual(convertHandler.getNum("1.0/2L"), 0.5);
    assert.strictEqual(convertHandler.getNum("4/2.2mi"), 1.81818);
    assert.strictEqual(convertHandler.getNum("3.2/1.6lbs"), 2);
  });
  // convertHandler should correctly return an error on a double-fraction (i.e. 3/2/3).
  test("convertHandler should correctly return an error on a double-fraction (i.e. 3/2/3).", function () {
    assert.throws(() => convertHandler.getNum("3/2/3L"), Error);
    assert.throws(() => convertHandler.getNum("4.2/2/3.1mi"), Error);
    assert.throws(() => convertHandler.getNum("5.7/1.2/9.3kg"), Error);
  });
  // convertHandler should correctly default to a numerical input of 1 when no numerical input is provided.
  test("convertHandler should correctly default to a numerical input of 1 when no numerical input is provided.", function () {
    assert.typeOf(convertHandler.getNum("L"), "number");
    assert.strictEqual(convertHandler.getNum("L"), 1);
    assert.typeOf(convertHandler.getNum("kg"), "number");
    assert.strictEqual(convertHandler.getNum("kg"), 1);
    assert.typeOf(convertHandler.getNum("mi"), "number");
    assert.strictEqual(convertHandler.getNum("mi"), 1);
  });
  // convertHandler should correctly read each valid input unit.
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
  // convertHandler should correctly return an error for an invalid input unit.
  test("convertHandler should correctly return an error for an invalid input unit.", function () {
    assert.throws(() => convertHandler.getUnit("3/2/3Li"), Error);
    assert.throws(() => convertHandler.getUnit("4.2/2/3.1mil"), Error);
    assert.throws(() => convertHandler.getUnit("5.7/1.2/9.3kgr"), Error);
  });
  // convertHandler should return the correct return unit for each valid input unit.
  test("convertHandler should return the correct return unit for each valid input unit.", function () {
    assert.strictEqual(convertHandler.getReturnUnit("L"), "gal");
    assert.strictEqual(convertHandler.getReturnUnit("gal"), "L");
    assert.strictEqual(convertHandler.getReturnUnit("kg"), "lbs");
    assert.strictEqual(convertHandler.getReturnUnit("lbs"), "kg");
    assert.strictEqual(convertHandler.getReturnUnit("km"), "mi");
    assert.strictEqual(convertHandler.getReturnUnit("mi"), "km");
  });
  // convertHandler should correctly return the spelled-out string unit for each valid input unit.
  test("convertHandler should correctly return the spelled-out string unit for each valid input unit.", function () {
    assert.strictEqual(convertHandler.spellOutUnit("L"), "liters");
    assert.strictEqual(convertHandler.spellOutUnit("GAL"), "gallons");
    assert.strictEqual(convertHandler.spellOutUnit("kg"), "kilograms");
    assert.strictEqual(convertHandler.spellOutUnit("lbs"), "pounds");
    assert.strictEqual(convertHandler.spellOutUnit("KM"), "kilometers");
    assert.strictEqual(convertHandler.spellOutUnit("mi"), "miles");
  });
  // convertHandler should correctly convert gal to L.
  test("convertHandler should correctly convert gal to L.", function () {
    assert.strictEqual(convertHandler.convert(1, "gal"), 3.78541);
    assert.strictEqual(convertHandler.convert(3.1, "gal"), 11.73477);
  });
  // convertHandler should correctly convert L to gal.
  test("convertHandler should correctly convert L to gal.", function () {
    assert.strictEqual(convertHandler.convert(1, "L"), 0.26417);
    assert.strictEqual(convertHandler.convert(11.73477, "L"), 3.1);
  });
  // convertHandler should correctly convert mi to km.
  test("convertHandler should correctly convert mi to km.", function () {
    assert.strictEqual(convertHandler.convert(1, "mi"), 1.60934);
    assert.strictEqual(convertHandler.convert(12.34, "mi"), 19.85926);
  });
  // convertHandler should correctly convert km to mi.
  test("convertHandler should correctly convert mi to km.", function () {
    assert.strictEqual(convertHandler.convert(1, "km"), 0.62137);
    assert.strictEqual(convertHandler.convert(1.60934, "km"), 1);
  });
  // convertHandler should correctly convert lbs to kg.
  test("convertHandler should correctly convert lbs to kg.", function () {
    assert.strictEqual(convertHandler.convert(1, "lbs"), 0.45359);
    assert.strictEqual(convertHandler.convert(5.31, "lbs"), 2.40857);
  });
  // convertHandler should correctly convert kg to lbs.
  test("convertHandler should correctly convert kg to lbs.", function () {
    assert.strictEqual(convertHandler.convert(1, "kg"), 2.20462);
    assert.strictEqual(convertHandler.convert(0.453592, "kg"), 1);
  });
});
