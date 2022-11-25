#!/bin/bash

sed -i "s@\${MAP_APP_MAP_TILE_URL}@${MAP_APP_MAP_TILE_URL:-"https://bucolic-cranachan-b10f01.netlify.app/dark.json"}@g" /var/www/js/*.js

exec "$@"
