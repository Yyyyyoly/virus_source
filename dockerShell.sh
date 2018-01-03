#!/bin/sh
set -e

/etc/init.d/mysql restart && redis-server  /usr/local/redis-4.0.2/redis.conf &

exec "$@"