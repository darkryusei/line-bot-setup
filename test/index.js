const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../index");

chai.should();
chai.use(chaiHttp);

describe("Test server file", () => {
  describe("test /", () => {
    it("should get hello form server", (done) => {
      chai
        .request(server)
        .get("/")
        .end((err, res) => {
          res.should.have.status(200);
          res.should.have.property("text");
          res.text.should.to.eql("hello");
        });
      done();
    });
  });
});
