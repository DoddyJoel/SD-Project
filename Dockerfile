FROM node:12.20.1 as node

WORKDIR /SD

COPY package*.json ./

RUN npm install
COPY . .

EXPOSE 8080
CMD [ "npm", "start" ]