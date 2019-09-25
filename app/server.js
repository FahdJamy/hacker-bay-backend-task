import express from "express";
import cors from "cors";
import dotEnv from "dotenv";
import log from "fancy-log";

import routes from "./routes";

const app = express();
dotEnv.config();

app.use(express.json());
app.use(cors());

routes(app);

app.use((req, res) => {
  return res.status(404).json({
    message: "Resource not found",
    status: false,
  });
});

const port =
  parseInt(process.env.NODE_ENV === "test" ? 8378 : process.env.PORT, 10) ||
  8000;
export const server = app.listen(port, () => {
  log(`Server is running on http://localhost:${port}`);
});

export default app;
