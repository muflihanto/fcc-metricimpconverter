const chaiHttp = require("chai-http");
const chai = require("chai");
let assert = chai.assert;
const server = require("../server");

chai.use(chaiHttp);

suite("Functional Tests", function () {
  this.timeout(5000);
  // TODO: Convert a valid input such as 10L: GET request to /api/convert.
  test("Convert a valid input such as 10L: GET request to /api/convert.", function (done) {
    chai
      .request(server)
      .keepOpen()
      .get("/api/convert?input=10L")
      .end(function (err, res) {
        assert.equal(res.status, 200);
        const result = JSON.parse(res.text);
        assert.deepEqual(result, {
          initNum: 10,
          initUnit: "L",
          returnNum: 2.6417,
          returnUnit: "gal",
          string: "10 liters converts to 2.6417 gallons",
        });
        done();
      });
  });
  // TODO: Convert an invalid input such as 32g: GET request to /api/convert.
  test("Convert an invalid input such as 32g: GET request to /api/convert.", function (done) {
    chai
      .request(server)
      .keepOpen()
      .get("/api/convert?input=32g")
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.strictEqual(res.text, "invalid unit");
        done();
      });
  });
  // TODO: Convert an invalid number such as 3/7.2/4kg: GET request to /api/convert.
  test("Convert an invalid number such as 3/7.2/4kg: GET request to /api/convert.", function (done) {
    chai
      .request(server)
      .keepOpen()
      .get("/api/convert?input=3/7.2/4kg")
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.strictEqual(res.text, "invalid number");
        done();
      });
  });
  // TODO: Convert an invalid number AND unit such as 3/7.2/4kilomegagram: GET request to /api/convert.
  // TODO: Convert with no number such as kg: GET request to /api/convert.
});
