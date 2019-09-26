import jsonpatch from "fast-json-patch";
import { successResponses } from "../constants";

export class JsonController {
  // Json controller handlers all Json actions on the Json resources
  /**
   * @param  {object} req
   * @param  {object} res
   * @returns Promise
   */
  static async patchBody(req, res) {
    const { document, patch } = req.body;
    // patch original document with the patch a user sent.
    const { newDocument } = jsonpatch.applyPatch(document, patch);
    return res.status(200).json({
      data: {
        message: successResponses.bodyPatched,
        newDocument,
      },
      success: true,
    });
  }
}

export default JsonController;
