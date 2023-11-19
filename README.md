# nats-nodejs-docker-k8-example

## To run

### using Skaffold (coming soon)

make sure you have helm installed:

```shell
npm run install:infra
```

```shell
skaffold dev
```

### using docker compose?

```shell
docker-compose up
pnpm dev
```

## To publish events

Once running visit [http://localhost:8081/publish](http://localhost:8081/publish)

and watch the console output for `nats-consumer`
