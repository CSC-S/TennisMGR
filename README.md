# :open_book: TENNIS MANAGER 

[![TypeScript-v3.7.5](https://img.shields.io/badge/TypeScript-v3.7.5-007ACC.svg)](https://www.typescriptlang.org/)
[![React-v16.12.0](https://img.shields.io/badge/React-v16.12.0-61DAFB.svg?logo=react)](https://reactjs.org/)
[![Redux-v4.0.5](https://img.shields.io/badge/Redux-v4.0.5-764ABC.svg?logo=redux)](https://redux.js.org/)
[![Webpack-v4.41.5](https://img.shields.io/badge/Webpack-v4.41.5-8DD6F9.svg?logo=webpack)](https://webpack.js.org/)
[![made-for-VSCode](https://img.shields.io/badge/Made%20for-VSCode-007ACC.svg)](https://code.visualstudio.com/)
![KaKao](https://img.shields.io/badge/API-KAKAO-yellow)

- 회전목마를 활용 한 카드 뷰 및 간단한 프론트 뷰 구현. <br />
- 카카오 지도 API를 활용한 지도검색 (검색 카테고리 변경 값에서 테니스 구장이 없어서 상세구현 미완) <br />
- 소셜 로그인 연동( 구글-App 실제게시 / 카카오-Biz App 전환 이슈로 상세구현 미완) <br />
- 카카오 페이 활용 <br />

- 상품 목록 페이지에서 상품을 보고, 장바구니에 상품을 추가할 수 있으며 장바구니 페이지에서 그 목록을 볼 수 있다. <br />
- 상품 목록 페이지에서는 `4개`의 상품씩 `페이징` 처리를 한다. <br />
- 장바구니에는 `최대 3개`의 상품만 담을 수 있다. <br />
- 장바구니에 담긴 상품은 브라우저를 `새로고침(reload)`해도 유지 <br />
- 상품은 최소한 `1개`의 수량을 가지고 있으며, 그 이상으로 설정 가능<br />
- 만약 쿠폰 적용이 가능한 상품이라면, `자동으로 해당 쿠폰을 적용`한 화면을 보여준다. <br />
- 자동으로 쿠폰을 적용했더라도, 소비자는 쿠폰을 선택할 수 있다. <br />
- `정액 쿠폰`과 `정률 쿠폰`의 할인액이 같을 경우, `정액 쿠폰`으로 처리한다. <br />
- 모바일 이용자를 고려하여 버튼, 페이지네이션 등을 전체 UI를 유지하는 선에서 `오른쪽`에 위치시킨다. <br />


## :clock3: 프로젝트 기간

2021.11.19 ~ 2021.12.07

## :hammer: Installation

```javascript
npm i // yarn add
```

## :bell: Usage

```javascript
npm start // yarn start
※ client 와 shop을 따로따로 실행해야 함.
```

client = `npm start` or `npm run start`, your browser open `http://localhost:3000`.
shop = `npm start` or `npm run start`, your browser open `http://localhost:3001/products`.


## :mag: Thchnical Skills

- 메인 라이브러리 : React
- 메인 언어 및 문법 : Typescript, RxJS, Javascript ES6+, JSX, html+css
- 상태 관리: redux, redux-observable
- 서버: webpack-dev-server

## :trident: Collaboraters

최승찬 / 성낙은 / 이근재 / 조민지
