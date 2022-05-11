FROM node:lts-alpine as build-stage
WORKDIR app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build
EXPOSE 3000
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000
CMD ["npm","start"]

