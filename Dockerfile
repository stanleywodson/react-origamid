FROM node

WORKDIR /app

COPY package.json .

RUN npm install

#pesquisar se copia se todo o projeto ou somente a pasta onde possui o js
COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]