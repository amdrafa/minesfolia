FROM node:16-slim
RUN apt update && apt install openssl libc6

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

EXPOSE 3000

ENV PORT 3000
