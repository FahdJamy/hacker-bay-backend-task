import chai from "chai";

import { AppTest } from "../common";
import { errorResponses, successResponses } from "../../constants";
import { TokenHelper } from "../../helpers";

const { expect } = chai;

const url = "/json/patch";
const data = {
  document: { google: "holly" },
  patch: [{ op: "add", path: "/google", value: "Wester" }],
};

describe("Json", async () => {
  const token = await TokenHelper.generateToken({ username: "meeee" });
  describe("Patch/ json body", () => {
    it(`returns message ${errorResponses.missingDocumentBody} if 'document' is missing`, async () => {
      const response = await AppTest.patch(url)
        .send({})
        .set("Authorization", `Bearer ${token}`);
      expect(response.body.error.message).to.equal(
        errorResponses.missingDocumentBody
      );
    });

    it(`returns message ${errorResponses.missingPatch} if 'patch' is missing`, async () => {
      const response = await AppTest.patch(url)
        .send({ document: { google: "holly" } })
        .set("Authorization", `Bearer ${token}`);
      expect(response.body.error.message).to.equal(errorResponses.missingPatch);
    });

    it(`returns message ${errorResponses.missingPatch} if 'patch' is missing`, async () => {
      const response = await AppTest.patch(url)
        .send({ document: { google: "holly" } })
        .set("Authorization", `Bearer ${token}`);
      expect(response.body.error.message).to.equal(errorResponses.missingPatch);
    });

    it(`returns message ${errorResponses.missingPatch} 'op'and 'path' keys are missing in objects patch`, async () => {
      const response = await AppTest.patch(url)
        .send({ document: { google: "holly" }, patch: [{}] })
        .set("Authorization", `Bearer ${token}`);
      expect(response.body.error.message).to.equal(errorResponses.missingPatch);
    });

    it(`returns message ${errorResponses.missingOpPatchKey} if 'op' is empty or not among required valid ['remove', 'replace', 'add']`, async () => {
      const response = await AppTest.patch(url)
        .send({ document: { google: "holly" }, patch: [{ op: "" }] })
        .set("Authorization", `Bearer ${token}`);
      expect(response.body.error.message).to.equal(
        errorResponses.missingOpPatchKey
      );
    });

    it(`returns message ${errorResponses.missingPatch} if path is missing`, async () => {
      const response = await AppTest.patch(url)
        .send({ document: { google: "holl" }, patch: [{ op: "remove" }] })
        .set("Authorization", `Bearer ${token}`);
      expect(response.body.error.message).to.equal(errorResponses.missingPatch);
    });

    it(`returns message ${errorResponses.missingPathPatchKey} if path in patch objects is empty`, async () => {
      const response = await AppTest.patch(url)
        .send({
          document: { google: "holl" },
          patch: [{ op: "remove", path: "" }],
        })
        .set("Authorization", `Bearer ${token}`);
      expect(response.body.error.message).to.equal(
        errorResponses.missingPathPatchKey
      );
    });

    it(`returns status code 200 if user provide all required fields and patch is successful`, async () => {
      const response = await AppTest.patch(url)
        .send({ ...data })
        .set("Authorization", `Bearer ${token}`);
      expect(response.body.data.message).to.equal(successResponses.bodyPatched);
      expect(response.status).to.equal(200);
    });
  });
});
