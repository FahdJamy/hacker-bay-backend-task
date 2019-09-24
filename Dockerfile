FROM node:10

ENV NODE_ENV=dev

RUN npm i -g nodemon  @babel/core @babel/cli
RUN mkdir /app
ADD package.json /app/package.json

WORKDIR /app
RUN npm install

ADD . ./

EXPOSE 8000

CMD ["npm", "start"]
