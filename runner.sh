#!/bin/bash

docker run -ti --rm \
	--publish 8080:80 \
	--volume $PWD/html:/usr/share/nginx/html:ro \
	nginx:alpine
