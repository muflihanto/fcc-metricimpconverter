"use strict";

const expect = require("chai").expect;
const ConvertHandler = require("../controllers/convertHandler.js");

module.exports = function (app) {
  let convertHandler = new ConvertHandler();

  app.route("/api/convert").get((req, res) => {
    console.log({ input: req.query.input });
    if (req.query.input === undefined || req.query.input === "") {
      res.status(404).type("text").send("invalid unit");
    } else {
      let str = String(req.query.input);
      let initUnit, initNum;
      try {
        initUnit = convertHandler.getUnit(str);
        initNum = convertHandler.getNum(str);
      } catch (err) {
        return res.send(err.message);
      }
      let returnNum = convertHandler.convert(initNum, initUnit);
      let returnUnit = convertHandler.getReturnUnit(initUnit);
      let string = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
      res.json({
        initNum,
        initUnit,
        returnNum,
        returnUnit,
        string,
      });
    }
  });
};
