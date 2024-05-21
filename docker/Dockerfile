FROM node:14
WORKDIR /usr/src/app
COPY /code/package*.json ./
RUN npm install
COPY /code/ .
EXPOSE 3000
CMD ["node", "app.js"]