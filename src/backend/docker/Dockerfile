# base image
FROM node:12-alpine

LABEL maintainer="hancharek"

ARG TZ

RUN \
    # Add timezone
    apk add --no-cache tzdata \
    && ln -snf /usr/share/zoneinfo/$TZ /etc/localtime \
    && echo $TZ > /etc/timezone \
    # Install yarn
    && apk add --update --no-cache yarn

ENV BACKEND_ROOT /youtube-video/backend

RUN mkdir -p $BACKEND_ROOT

WORKDIR $BACKEND_ROOT

COPY ["./backend/youtube-video/package.json", "./backend/youtube-video/yarn.lock", "./"]
RUN yarn install --network-concurrency 1 \
    && yarn cache clean

COPY ./backend/youtube-video ./

# Copy sequelize datamodels
COPY ./datamodels ./datamodels

# dev server
EXPOSE 3100
# debugger
EXPOSE 9229

CMD ["yarn", "run", "start"]