import dotEnv from "dotenv";
import jwt from "jsonwebtoken";

dotEnv.config();

const tokenSignatures = {
  algorithm: "HS256",
  expiresIn: "1d",
};

export default class TokenHelper {
  /**
   * @param  {object} payload
   * @returns Promise
   */
  static async generateToken(payload) {
    const token = await jwt.sign(
      payload,
      process.env.SECRET_KEY,
      tokenSignatures
    );
    return token;
  }

  /**
   * @param  {string} token
   * @returns User decoded payload
   */
  static decodeToken(token) {
    try {
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      return decoded;
    } catch (error) {
      return null;
    }
  }
}
