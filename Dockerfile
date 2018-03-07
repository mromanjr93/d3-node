FROM node:8.9.4-alpine

ENV APP=/home/app

WORKDIR $APP

COPY package*.json $APP/

RUN npm cache clean -f && npm install --progress=false --silent

COPY . .

CMD ["npm", "start"]