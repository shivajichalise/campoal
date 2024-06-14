FROM node:20.14-alpine

WORKDIR /frontend

COPY package.json .

RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]
