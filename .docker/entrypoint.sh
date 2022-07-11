#!/bin/bash

sed -i "s@MAP_APP_MAP_TILE_URL@$MAP_APP_MAP_TILE_URL@g" /var/www/js/*.js
sed -i "s@MAP_APP_MAP_SPRITE_URL@$MAP_APP_MAP_SPRITE_URL@g" /var/www/js/*.js

exec "$@"
