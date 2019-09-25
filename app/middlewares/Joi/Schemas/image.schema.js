/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
import Joi from "@hapi/joi";

import { errorResponses } from "../../../constants";

export const imageSchema = Joi.object({
  imageUrl: Joi.string()
    .required()
    .pattern(/\.(jpg|jpeg|tiff|png)$/i)
    .error(errors => {
      errors.forEach(err => {
        switch (err.code) {
          case "any.required":
            err.message = errorResponses.imageRequired;
            break;
          case "string.pattern.base":
            err.message = errorResponses.imageInvalid;
            break;
          default:
            break;
        }
      });
      return errors;
    }),
});
