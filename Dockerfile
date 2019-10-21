FROM node:10
WORKDIR /use/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3033
CMD ["node", "./server/index.js"]