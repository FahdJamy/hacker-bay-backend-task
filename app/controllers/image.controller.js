import { successResponses, errorResponses } from "../constants";
import { downloader, thumbnailImage } from "../utils";

export class ImageController {
  // This controller handlers all Image actions on Image resources.
  /**
   * @param  {object} req
   * @param  {object} res
   * @returns Promise
   */
  static async imageThumbnail(req, res) {
    const { imageUrl } = req.body;
    const { filename } = await downloader(imageUrl);
    if (!filename) {
      res.status(400).json({
        error: {
          message: errorResponses.wrongImagePath,
        },
        success: false,
      });
    }
    const pathhh = await thumbnailImage(filename);
    return res.status(200).json({
      data: {
        imagePath: pathhh,
        message: successResponses.imageResized,
      },
      success: true,
    });
  }
}

export default ImageController;
