import chai from "chai";

import { AppTest } from "../common";
import { errorResponses, successResponses } from "../../constants";

const { expect } = chai;

describe("Users", function() {
  describe("POST/ login user", function() {
    it("returns status code 400 if user doesnot provide required credentials", async () => {
      const response = await AppTest.post("/auth/login").send({});
      expect(response.status).to.equal(400);
    });

    it(`returns message ${errorResponses.usernameRequired} if user doesnot provide username`, async () => {
      const response = await AppTest.post("/auth/login").send({
        password: "tooolP",
      });
      expect(response.body.error.message).to.equal(
        errorResponses.usernameRequired
      );
    });

    it(`returns message ${errorResponses.invalidUsername} if username doesnot meet required criteria`, async () => {
      const response = await AppTest.post("/auth/login").send({
        username: "t",
      });
      expect(response.body.error.message).to.equal(
        errorResponses.invalidUsername
      );
    });

    it(`returns message ${errorResponses.passwordRequired} if user doesnot provide password`, async () => {
      const response = await AppTest.post("/auth/login").send({
        username: "tooolP",
      });
      expect(response.body.error.message).to.equal(
        errorResponses.passwordRequired
      );
    });
    it(`returns message ${errorResponses.emptyPassword} if password is empty`, async () => {
      const response = await AppTest.post("/auth/login").send({
        username: "googleBack",
        password: "  ",
      });
      expect(response.body.error.message).to.equal(
        errorResponses.emptyPassword
      );
    });
    it(`returns message ${errorResponses.invalidPassword} if user provides a password that doesnot meet criteria`, async () => {
      const response = await AppTest.post("/auth/login").send({
        username: "tooolP",
        password: "tooolP",
      });
      expect(response.body.error.message).to.equal(
        errorResponses.invalidPassword
      );
    });
    it("should login a user successfully if user provide required credentials", done => {
      AppTest.post("/auth/login")
        .send({
          username: "tooolP",
          password: "passeD98Ooo",
        })
        .then(response => {
          expect(response.body.data.message).to.equal(
            successResponses.userLoggedIn
          );
          expect(response.status).to.equal(200);
        });
      done();
    });
  });
});
