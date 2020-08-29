FROM node:14-alpine

ARG APP_VERSION

ENV LANG C.UTF-8 \
  APP_VERSION=${APP_VERSION}

RUN apk update && \
  apk add --update \
  bash \
  git \
  postgresql-client \
  curl

WORKDIR /api-gateway

COPY . .

RUN yarn && \
  yarn build

CMD ["yarn", "start"]
