// All routes that map to User resources are defined here
import { Router } from "express";

import { validateLoginBody } from "../../middlewares";
import { UserController } from "../../controllers";

const router = Router();

router.post("/login", [validateLoginBody], UserController.login);

export default router;
