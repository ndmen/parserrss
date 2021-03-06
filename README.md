<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Description

This is app parse RSS every 45 seconds.

Routes:

posts

POST /posts/{id}

GET /posts

GET /posts/{id}

PATCH /posts/{id}

DELETE /posts/{id}

Where {id} - ObjectId(_id) documents in Mongo DB.


Cron Task:

Parshe RSS every 45 seconds and add posts to database MongoDB.

## Installation

```bash
$ npm install -g pnpm
```

```bash
$ pnpm install
```

## Running the app

Before run add .env file. See .env.example

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

If you want use Swagger - open link http://localhost:3000/api/#/posts/ after runnning the app.

## Test

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## License

Nest is [MIT licensed](LICENSE).
