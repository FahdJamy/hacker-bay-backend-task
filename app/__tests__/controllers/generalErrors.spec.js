import chai from "chai";

import { AppTest } from "../common";

const { expect } = chai;

describe("Users", function() {
  describe("Not found", function() {
    it("returns status code 404 if user access a resource that doesnot exist", async () => {
      const response = await AppTest.post("").send({});
      expect(response.status).to.equal(404);
    });
  });
});
