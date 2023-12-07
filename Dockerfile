FROM node:21-alpine as BUILD_IMAGE

WORKDIR /app

COPY package.json .

RUN npm install

#pesquisar se copia se todo o projeto ou somente a pasta onde possui o js
COPY . .

RUN npm run build

FROM node:21-alpine as PRODUCTION_IMAGE

WORKDIR /app

COPY --from=BUILD_IMAGE /app/dist/ /app/dist/

EXPOSE 8081

COPY package.json .
COPY vite.config.ts .

RUN npm install typescript

EXPOSE 8081

CMD [ "npm", "run", "preview" ]