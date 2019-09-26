### Hacker Bay

Hacker bay backend challenge.

[![Build Status](https://travis-ci.org/FahdJamy/hacker-bay-backend-task.svg?branch=develop)](https://travis-ci.org/FahdJamy/hacker-bay-backend-task) [![Coverage Status](https://coveralls.io/repos/github/FahdJamy/hacker-bay-backend-task/badge.svg?branch=develop)](https://coveralls.io/github/FahdJamy/hacker-bay-backend-task?branch=develop)

###### Background

A backend microservices to support and simplify applications for [hackerbay](https://hackerbay.io).
A stateless microservice in Nodejs, with three major functionalities -

- Authentication.
- JSON patching.
- Image Thumbnail Generation.

###### How to run the project locally.

- Clone the project. run `git clone https://github.com/FahdJamy/hacker-bay-backend-task.git`.
- Install dependencies. run `npm install`.
- start the app. run `npm start`
- run the app in postman. (Base url `http://localhost:{port}/api/v1`).

**Note**

To access the swagger documentation.
- go to the browser and run `http://localhost:{port}/api-docs/`.

###### Project dependencies

- NodeJS.
- Express Js Framework.
- Mocha, chai Testing Framework.

###### Application Features

| EndPoint  | Function | Protected |
| ------------- | ------------- | ------------- |
|POST /auth/login | login a user and return token | No |
|PATCH /json/patch | Patch a an object based on the patch a user provides | Yes |
|POST /image/thumbnail | Download image, thumb-nail it and return url to the thumb nailed image | Yes |


###### Tools Used

- ExpressJS [Javascript Backend Framework]
- Joi for Validation
- Mocha and chai for Testing
- Docker - for containarization

###### Programming language

- Javascript

## Authors
- [Asiimwe Fahad](https://github.com/FahdJamy)

###### NOTE
This is a backend challenge from [hackerbay](https://hackerbay.io).
