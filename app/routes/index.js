import YAML from "yamljs";
import path from "path";
import swaggerUI from "swagger-ui-express";
import userRoute from "./app/user.route";
import imageRoute from "./app/image.route";

const swaggerDoc = YAML.load(path.join(__dirname, "../../documentation.yml"));

const apiV = "/api/v1";
const routes = app => {
  app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDoc));
  app.use(`${apiV}/auth`, userRoute);
  app.use(`${apiV}/image`, imageRoute);
};

export default routes;
