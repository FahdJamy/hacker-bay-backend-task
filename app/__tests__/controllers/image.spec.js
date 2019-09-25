import chai from "chai";

import { AppTest } from "../common";
import { errorResponses, successResponses } from "../../constants";
import { TokenHelper } from "../../helpers";

const { expect } = chai;
const resourcePath = "/image/thumbnail";
const imageUrl =
  "https://image.shutterstock.com/image-photo/closeup-on-smartphone-display-screen-260nw-1218889750.jpg";

describe("Users", async () => {
  const token = await TokenHelper.generateToken({ username: "meeee" });
  it("returns status code 401 if user doesnot provide authentication credential", async () => {
    const response = await AppTest.post(resourcePath).send({
      imageUrl,
    });
    expect(response.status).to.equal(401);
    expect(response.body.message).to.equal(errorResponses.invalidBearerToken);
  });

  it(`returns message if token is invalid or expired`, async () => {
    const response = await AppTest.post(resourcePath)
      .send({
        imageUrl,
      })
      .set("Authorization", "Bearer wrongtokeennnnn");
    expect(response.status).to.equal(401);
    expect(response.body.message).to.equal(errorResponses.invalidToken);
  });

  it(`returns status 400 if token is not of type Bearer`, async () => {
    const response = await AppTest.post(resourcePath)
      .send({
        imageUrl,
      })
      .set("Authorization", "Beare wrongtokeennnnn");
    expect(response.status).to.equal(401);
    expect(response.body.message).to.equal(errorResponses.invalidBearerToken);
  });

  it(`returns message ${errorResponses.imageRequired} if user doesnot provide an imageUrl`, async () => {
    const response = await AppTest.post(resourcePath)
      .send({})
      .set("Authorization", `Bearer ${token}`);
    expect(response.status).to.equal(400);
    expect(response.body.error.message).to.equal(errorResponses.imageRequired);
  });

  it(`returns message ${errorResponses.imageInvalid} if username provides image without extensions (.png|jpeg|jpg)`, async () => {
    const response = await AppTest.post(resourcePath)
      .send({ imageUrl: "imagess" })
      .set("Authorization", `Bearer ${token}`);
    expect(response.status).to.equal(400);
    expect(response.body.error.message).to.equal(errorResponses.imageInvalid);
  });

  it(`returns status code 200 if image is thumbnailed successfully`, async () => {
    const response = await AppTest.post(resourcePath)
      .send({ imageUrl })
      .set("Authorization", `Bearer ${token}`);
    expect(response.status).to.equal(200);
    expect(response.body.data.message).to.equal(successResponses.imageResized);
  });
  it(`returns message ${errorResponses.wrongImagePath} if user provides url of an image that does not exit`, async () => {
    const response = await AppTest.post(resourcePath)
      .send({
        imageUrl: "https://image.shutterstock.com/image-photo/closeup.on.jpg",
      })
      .set("Authorization", `Bearer ${token}`);
    expect(response.status).to.equal(400);
    expect(response.body.error.message).to.equal(errorResponses.wrongImagePath);
  });
});
