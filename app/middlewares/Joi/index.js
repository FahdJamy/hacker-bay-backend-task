/* eslint-disable consistent-return */
export default class JoiValidator {
  static validateRequestBody(req, res, next, SchemaFunc) {
    const { body } = req;
    const { error } = SchemaFunc.validate(body);
    const errors = [];
    if (error) {
      error.details.forEach(e => {
        errors.push(e.message);
      });
      return res.status(400).send({
        error: { message: errors[0] },
        success: false,
      });
    }
    next();
  }
}
