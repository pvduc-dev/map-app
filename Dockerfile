FROM node:18-alpine as builder

LABEL stage=builder

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . ./

RUN yarn run build

FROM nginx:1.9-alpine

COPY --from=build /app/dist var/www

COPY .nginx/nginx.conf /etc/nginx/nginx.conf

COPY .docker/entrypoint.sh /

RUN chmod +x entrypoint.sh

RUN apk add --no-cache bash

ENTRYPOINT ["bash","entrypoint.sh"]

CMD ["nginx","-g","daemon off;"]

EXPOSE 80
