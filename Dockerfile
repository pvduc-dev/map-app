FROM node:14.18.1-alpine3.14 as build

WORKDIR /home/app

COPY package.json yarn.lock ./

RUN yarn install --prod --frozen-lockfile

COPY . .

RUN yarn run build

FROM nginx:1.17.10-alpine

COPY --from=build home/app/dist var/www

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

ENTRYPOINT ["nginx","-g","daemon off;"]
