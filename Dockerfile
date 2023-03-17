# FROM node:12.22.7
# ENV TZ=Europe/Rome
# RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
# WORKDIR /usr/src/app
# COPY package*.json ./
# RUN npm install
# COPY . .
# CMD [ "npm", "start" ]


FROM nginx:1.15
COPY ./dist/dashboard/ /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf