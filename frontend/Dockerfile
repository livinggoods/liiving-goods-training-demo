FROM node:8-alpine

ENV HOST 0.0.0.0

COPY . /var/www/html

WORKDIR /var/www/html

RUN npm install -g typescript @angular/cli pm2

RUN npm install --only=prod

EXPOSE 8000
