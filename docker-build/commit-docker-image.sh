#!/bin/bash

IMAGE_NAME=pudding/github-action-app:puppeteer-python-14-crawler-Course-Example-20231106-1201

docker tag crawler-course-example-app ${IMAGE_NAME}
docker push "${IMAGE_NAME}"