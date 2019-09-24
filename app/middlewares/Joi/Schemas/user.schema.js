/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
import Joi from "@hapi/joi";

import { errorResponses } from "../../../constants";

export const userLoginSchema = Joi.object({
  username: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required()
    .error(errors => {
      errors.forEach(err => {
        switch (err.code) {
          case "any.required":
            err.message = errorResponses.usernameRequired;
            break;
          case "string.min" || "string.max":
            err.message = errorResponses.invalidUsername;
            break;
          default:
            break;
        }
      });
      return errors;
    }),
  password: Joi.string()
    .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/)
    .required()
    .error(errors => {
      errors.forEach(err => {
        switch (err.code) {
          case "any.required":
            err.message = errorResponses.passwordRequired;
            break;
          case "string.pattern.base":
            err.message = errorResponses.invalidPassword;
            break;
          default:
            break;
        }
      });
      return errors;
    })
});
