FROM node:15.5.1

RUN mkdir /usr/src/app 
 
WORKDIR /usr/src/app

RUN npm install -g @angular/cli

COPY . .
