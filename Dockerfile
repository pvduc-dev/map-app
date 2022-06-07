FROM node:14.17.6-alpine as build

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . ./

RUN yarn run build

FROM nginx

COPY --from=build /app/dist var/www

COPY nginx.conf /etc/nginx/nginx.conf

COPY entrypoint.sh /

RUN chmod +x entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]

CMD ["nginx","-g","daemon off;"]

EXPOSE 80
