import userRoute from "./app/user.route";
import imageRoute from "./app/image.route";

const apiV = "/api/v1";
const routes = app => {
  app.use(`${apiV}/auth`, userRoute);
  app.use(`${apiV}/image`, imageRoute);
};

export default routes;
