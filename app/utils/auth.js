/* eslint-disable import/prefer-default-export */
export const getToken = req => {
  if (
    !req.headers.authorization ||
    req.headers.authorization.trim().length === 0
  ) {
    return null;
  }
  // expects authorization header to contain value such as `Bearer {token}`
  const splitedHeaders = req.headers.authorization.split(" ");
  return splitedHeaders[0] === "Bearer" ? splitedHeaders[1] : null;
};
