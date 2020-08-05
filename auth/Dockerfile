FROM node:alpine

WORKDIR /app
COPY package.json .
RUN npm install --only=prod

CMD ["npm", "start"]
