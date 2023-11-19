FROM node:lts-alpine3.14 as BASE

WORKDIR /app
COPY package.json ./
COPY tsconfig.json ./
RUN yarn install
COPY src ./src
RUN yarn build

ARG PORT=8082
ENV PORT $PORT
EXPOSE $PORT

# FROM BASE as TEST
# RUN yarn
# COPY .eslintrc.json .
# RUN yarn run lint
# RUN yarn run test
CMD node dist/index.js