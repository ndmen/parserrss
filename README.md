<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Description

This is app parse RSS every 45 seconds.

Routes:

posts

GET /posts

GET /posts/{id}

PATCH /posts/{id}

UPDATE /posts/{id}

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

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

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
