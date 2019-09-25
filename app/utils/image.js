/* eslint-disable import/prefer-default-export */
import download from "image-downloader";
import sharp from "sharp";
import uuid4 from "uuid4";

const path = require("path");

export const downloader = async url => {
  try {
    const data = await download.image({
      url,
      dest: path.join(__dirname, "../images/downloaded"),
    });
    return data;
  } catch (error) {
    return error;
  }
};

export const thumbnailImage = async imagePath => {
  try {
    const imageName = `${uuid4()}.${imagePath.split(".")[1]}`;
    const pathToImage = path.join(__dirname, `../images/resized/${imageName}`);
    await sharp(imagePath)
      .resize(50, 50)
      .toFile(pathToImage, (err, info) => {
        if (err) return err;
      });
    return pathToImage;
  } catch (error) {
    return error;
  }
};
