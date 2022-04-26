# NestJS-core

- javascript, json의 차이

  - json:
    - 속성이름이 큰따옴표
    - 후행 쉼표불가능
    - 선행0, 소숫점뒤0 불가능
    - 작은따옴표 문자열 금지
    - 주석, undefined 미지원

- mac 에서 시작할떄

  - npm i
  - npm i @types/express -D

- express middleware
  - `app.use`로 만듦
  - app.get 등을 사용해서 만들 수 있음 , next를 넣으면된다.
  - 미들웨어를 찾기 전에 라우터를 발견하면 미들웨어를 거치지 않게됨.
  - 미들웨어를 사용하려면 순서와 용도가 중요
  - `맨 아래에 존재하면 라우터를 찾지 못한 요청이 미들웨어를 만나게 해서 404 에러를 리턴할 수 있음. (next 필요없음)`

```js
app.use((req, res, next) => {
  console.log(req.rawHeaders[1]);
  next(); // next 가 router를 찾음
});
```

- type narrowing 기법

  - https://medium.com/nodejs-server/type-narrowing-ts-f62fc28f413f
  - try...catch(err) 에서 err 타입 unknown (app.ts)
  - if (error instanceof Error) {

- patch api

  - cat = { ...cat, ...body };
  - `구조분해할당`

- single ton
  - 하나의 클래스에 하나의 인스턴스(server) ( 메모리 절감 )
