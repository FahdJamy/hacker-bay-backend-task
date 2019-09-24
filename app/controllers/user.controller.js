import { TokenHelper } from '../helpers';
import { successResponses } from '../constants';

export class UserController {
  static async login(req, res) {
    const { username } = req.body;
    let payload = { username }
    const access_token = await TokenHelper.generateToken(payload);
    payload.access_token = access_token;
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
