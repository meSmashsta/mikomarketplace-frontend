FROM node:15.5.1

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json

RUN npm install -g @angular/cli

RUN npm i @angular-devkit/build-angular

COPY . /app