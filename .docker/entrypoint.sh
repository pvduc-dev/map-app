#!/bin/bash

sed -i "s@\${MAP_APP_MAP_TILE_URL}@$MAP_APP_MAP_TILE_URL@g" /var/www/js/*.js

exec "$@"
