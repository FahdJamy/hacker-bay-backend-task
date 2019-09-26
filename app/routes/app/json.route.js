// All routes that map to Json resources are defined here
import { Router } from "express";

import { validateJsonPatchBody, authenticate } from "../../middlewares";
import { JsonController } from "../../controllers";

const router = Router();

// perform partial changes to an the original document a user sends
router.patch(
  "/patch",
  [authenticate, validateJsonPatchBody],
  JsonController.patchBody
);

export default router;
