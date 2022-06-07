#!/bin/bash

sed -i "s/MAP_APP_BASE_MAP_TILE_URL/$MAP_APP_BASE_MAP_TILE_URL/g" /usr/share/nginx/html/main*bundle.js

exec "$@"
