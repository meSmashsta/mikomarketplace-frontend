FROM node:14

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json

RUN npm install -g @angular/cli

RUN npm install --save-dev @angular-devkit/build-angular

COPY . /app