import JoiValidator from "./Joi";
import { userLoginSchema } from "./Joi/Schemas/user.schema";

export const validateLoginBody = (req, res, next) => {
  return JoiValidator.validateRequestBody(req, res, next, userLoginSchema);
};

export default validateLoginBody;
