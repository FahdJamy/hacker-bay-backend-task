import supertest from "supertest";
import app from "../../server";

const version = "/api/v1";

export class AppTest {
  static app = supertest(app);

  static post = url => {
    const request = this.app.post(`${version}${url}`);
    return request;
  };

  static patch = url => {
    const request = this.app.patch(`${version}${url}`);
    return request;
  };
}

export default AppTest;
