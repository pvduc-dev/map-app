#!/bin/bash

if [ ! "$GENERATE_SOURCEMAP" ]; then
  # Remove javascript source map
  sed -i '/^\/\/# sourceMappingURL=/d' /var/www/js/*.js
  rm -rf /var/www/js/*.js.map

  # Remove css source map
  sed -i '/\/*# sourceMappingURL=/d' /var/www/css/*.css
  rm -rf /var/www/css/*.css.map
fi

sed -i "s@\${MAP_APP_MAP_TILE_URL}@${MAP_APP_MAP_TILE_URL:-"https://bucolic-cranachan-b10f01.netlify.app/dark.json"}@g" /var/www/js/*.js

exec "$@"
