export const errorResponses = {
  invalidUsername:
    "username should contain characters between 3 - 10 and should be alpha numeric",
  usernameRequired: "username shouldn't be empty",
  passwordRequired: "a password is required.",
  invalidPassword:
    "password should contain atleast 8 characters a Uppercase character, a number and a lowercase character",
  imageRequired:
    "please provide an image url to download from, field 'imagePath' is required",
  imageInvalid: "image should have an extesion of either (.png, .jpg, .jpeg)",
  wrongImagePath:
    "you provided an absolute image Url please provide a valid image URL",
  invalidToken: "please provide a valid token",
  invalidBearerToken: "please provide a valid token of type Bearer",
};

export const successResponses = {
  userLoggedIn: "user logged in successfully!",
  imageResized: "image resized successfully!",
};
