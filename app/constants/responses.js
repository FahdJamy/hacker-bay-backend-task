// All constant variables that might be re-used are describe here
export const errorResponses = {
  invalidUsername:
    "username should contain characters between 3 - 10 and should be alpha numeric",
  usernameRequired: "username shouldn't be empty",
  passwordRequired: "a password is required.",
  invalidPassword:
    "password should contain atleast 8 characters a Uppercase character, a number and a lowercase character",
  emptyPassword: "sorry password shoudn't be empty",
  imageRequired:
    "please provide an image url to download from, field 'imagePath' is required",
  imageInvalid: "image should have an extesion of either (.png, .jpg, .jpeg)",
  wrongImagePath:
    "you provided an absolute image Url please provide a valid image URL",
  invalidToken: "please provide a valid token",
  invalidBearerToken: "please provide a valid token of type Bearer",
  missingDocumentBody:
    "please provide an object that is to be patched of key 'document'",
  missingPatch:
    "please provide a key 'patch' with an array of objects to be used for patching of at least keys 'op and path'",
  missingPathPatchKey:
    "at least a path key should also be provided and it should not be empty",
  missingOpPatchKey:
    "the 'op' must be provide and it must be one of these [remove, replace, add, copy, move, test]",
  badRequest:
    "Opps, something went wrong, please make sure you have provided everything or try again later",
};

export const successResponses = {
  userLoggedIn: "user logged in successfully!",
  imageResized: "image resized successfully!",
  bodyPatched: "the original body has been patched successfully!",
};
