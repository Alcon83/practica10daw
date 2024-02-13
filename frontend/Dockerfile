FROM node:19
#-p para que la cree si no existe
WORKDIR /usr/src/

COPY package*.json ./

COPY . .

RUN npm install

CMD ["npm", "start"]