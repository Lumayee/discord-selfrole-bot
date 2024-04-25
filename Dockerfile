FROM node:latest

WORKDIR /app

COPY package.json ./

RUN npm install eris

RUN mkdir config

COPY . .

VOLUME ["/app/config"]

CMD ["node", "main.js"]
