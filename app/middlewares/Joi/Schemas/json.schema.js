/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
import Joi from "@hapi/joi";

import { errorResponses } from "../../../constants";

const patchKey = Joi.object().keys({
  op: Joi.string()
    .trim()
    .required()
    .valid("remove", "replace", "add", "copy", "move", "test")
    .error(errors => {
      errors.forEach(err => {
        switch (err.code) {
          case "any.only":
            err.message = errorResponses.missingOpPatchKey;
            break;
          default:
            break;
        }
      });
      return errors;
    }),
  path: Joi.string()
    .trim()
    .required()
    .error(errors => {
      errors.forEach(err => {
        switch (err.code) {
          case "string.empty":
            err.message = errorResponses.missingPathPatchKey;
            break;
          default:
            break;
        }
      });
      return errors;
    }),
  value: Joi.string().trim(),
});

export const jsonSchema = Joi.object({
  document: Joi.object()
    .required()
    .error(errors => {
      errors.forEach(err => {
        switch (err.code) {
          case "any.required":
            err.message = errorResponses.missingDocumentBody;
            break;
          default:
            break;
        }
      });
      return errors;
    }),
  patch: Joi.array()
    .items(patchKey.required())
    .required()
    .error(errors => {
      errors.forEach(err => {
        switch (err.code) {
          case "any.required":
            err.message = errorResponses.missingPatch;
            break;
          default:
            break;
        }
      });
      return errors;
    }),
});
