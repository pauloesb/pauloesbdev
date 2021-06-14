FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm rebuild node-sass

COPY . .

EXPOSE 8080