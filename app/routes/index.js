import userRoute from "./app/user.route";

const apiV = "/api/v1";
const routes = app => {
  app.use(`${apiV}/auth`, userRoute);
};

export default routes;
