import { TokenHelper } from "../helpers";
import { successResponses } from "../constants";

export class UserController {
  // The User controller handlers all User related actions on the User resources
  /**
   * @param  {object} req
   * @param  {object} res
   * @returns Promise
   */
  static async login(req, res) {
    const { username } = req.body; // Get username
    const payload = { username };
    const token = await TokenHelper.generateToken(payload); // Generate token
    payload.token = token;
    return res.status(200).json({
      data: {
        ...payload,
        message: successResponses.userLoggedIn,
      },
      success: true,
    });
  }
}

export default UserController;
