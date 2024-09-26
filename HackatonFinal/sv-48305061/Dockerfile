FROM node:14.18.1-alpine3.14

WORKDIR /app

COPY package*.json ./

RUN apk add --no-cache make gcc g++ python3 && \
    npm install && \
    npm rebuild bcrypt --build-from-source && \
    apk del make gcc g++ python3

COPY . .

CMD [ "npm", "start" ]
