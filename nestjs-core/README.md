- start

- module 의 export 속성: 은닉화 해제

  "rootDir": "",
  "baseUrl": "./nestjs-core",

- pipe

  - ParseIntPipe
  - 컨트롤러에서 데이터 유효성 검사 및 변환하여 서버가 원하는 데이터를 얻을 수 잇도록 도와주는 클래스

- life cycle
  Incoming request
  Globally bound middleware
  Module bound middleware
  Global guards
  Controller guards
  Route guards
  Global interceptors (pre-controller)
  Controller interceptors (pre-controller)
  Route interceptors (pre-controller)
  Global pipes
  Controller pipes
  Route pipes
  Route parameter pipes
  Controller (method handler)
  Service (if exists)
  Route interceptor (post-request)
  Controller interceptor (post-request)
  Global interceptor (post-request)
  Exception filters (route, then controller, then global)
  Server response

- class validation
  app.useGlobalPipes(new ValidationPipe());

- virtual return (mongoose)

> 서비스 레이어에서 비지니스 로직을 처리하는 것보다는 도메인 프로세스 보장 및 트랜잭션 순서 보장의 역할을 하는 것이 맞습니다. (비지니스 로직을 처리하는 것은 도메인 레이어에서 하는 것이 맞습니다. 여기서 도메인 레이어는 엔터티 즉, @Entity 부분을 의미합니다. )
> 비지니스 도메인에 해당하는 속성들이 엔터티에 정의되고 레포지토리 레이어에 엔터티에 정의된 도메인 관련 속성들을 사용하여 DB에 접근하는 단위 쿼리 로직이 정의되고 서비스 레이어에서 이 단위 쿼리 로직들의 순서를 보장시키는 것

- jwt

- module 간의 exports imports

- 순환 모듈 : 서로 import 해결 == forwardRef(() => module)

---

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
