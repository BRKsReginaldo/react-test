FROM node:alpine

WORKDIR '/app'

COPY ./ ./

RUN yarn build

CMD ["npx","http-server", "dist"]