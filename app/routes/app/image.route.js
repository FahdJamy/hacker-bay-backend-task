// All routes that map to Image resources are defined here
import { Router } from "express";

import { validateImagePath, authenticate } from "../../middlewares";
import { ImageController } from "../../controllers";

const router = Router();

router.post(
  "/thumbnail",
  [authenticate, validateImagePath],
  ImageController.imageThumbnail
);

export default router;
