import JoiValidator from "./Joi";
import { userLoginSchema, imageSchema } from "./Joi/Schemas";

export const validateLoginBody = (req, res, next) => {
  return JoiValidator.validateRequestBody(req, res, next, userLoginSchema);
};

export const validateImagePath = (req, res, next) => {
  return JoiValidator.validateRequestBody(req, res, next, imageSchema);
};

export { authenticate } from "./auth";
