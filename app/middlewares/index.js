// export all middlewares for import access
import JoiValidator from "./Joi";
import { userLoginSchema, imageSchema, jsonSchema } from "./Joi/Schemas";

export const validateLoginBody = (req, res, next) => {
  return JoiValidator.validateRequestBody(req, res, next, userLoginSchema);
};

export const validateImagePath = (req, res, next) => {
  return JoiValidator.validateRequestBody(req, res, next, imageSchema);
};

export const validateJsonPatchBody = (req, res, next) => {
  return JoiValidator.validateRequestBody(req, res, next, jsonSchema);
};

export { authenticate } from "./auth";
