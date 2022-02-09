FROM node:latest 

COPY package.json .

RUN npm install

COPY . .

EXPOSE 7070

CMD ["node", "server.js"]
