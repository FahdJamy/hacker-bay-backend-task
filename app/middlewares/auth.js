/* eslint-disable import/prefer-default-export */
import { TokenHelper } from "../helpers";
import { errorResponses } from "../constants";
import { getToken } from "../utils";

// Check if user has provided a valid Bearer token.
export const authenticate = (req, res, next) => {
  const token = getToken(req, res);
  if (!token) {
    return res.status(401).json({
      success: false,
      message: errorResponses.invalidBearerToken,
    });
  }
  const data = TokenHelper.decodeToken(token);
  if (!data) {
    return res.status(401).json({
      success: false,
      message: errorResponses.invalidToken,
    });
  }
  return next();
};
