FROM node:19
#-p para que la cree si no existe
WORKDIR /usr/

COPY package*.json ./

COPY . .

RUN npm install

COPY ./scripts/wait-for-it.sh /wait-for-it.sh
RUN chmod +x /wait-for-it.sh
CMD ["/wait-for-it.sh", "mongodb:27017", "--", "npm", "start"]