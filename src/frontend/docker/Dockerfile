# base image
FROM node:12.15-alpine

LABEL maintainer="hancharek"

ARG TZ

RUN \
    # Add timezone
    apk add --no-cache tzdata \
    && ln -snf /usr/share/zoneinfo/$TZ /etc/localtime \
    && echo $TZ > /etc/timezone \ 
    # Install yarn
    && apk add --update --no-cache yarn


ENV FRONTEND_ROOT /youtube-video-feed/frontend

RUN mkdir -p $FRONTEND_ROOT

WORKDIR $FRONTEND_ROOT

COPY ["./youtube-video/package.json", "./youtube-video/yarn.lock", "./"]

RUN yarn install --check-files --network-concurrency 1

COPY ./youtube-video ./

# dev server
EXPOSE 3000

CMD ["yarn", "run", "start"]
