FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install

COPY ./src ./src
EXPOSE 3000
CMD [ "node", "src/main.js" ]