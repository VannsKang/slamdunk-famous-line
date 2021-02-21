# 슬램덩크 명대사 입력기

---

> 본 프로젝트는 TypeScript, Babel, Core.js, SPA의 원리를 공부하고자 시작했습니다.

![image](https://user-images.githubusercontent.com/4216651/108630060-5e467100-74a6-11eb-9088-ec74cf6a7ab3.png)

## 적용 기술 스택

> `TypeScript`, `Core.js`, `Jest`, `Node.js`, `Bootstrap`

### 프로젝트 특징

- 하나의 댓글은 이름, 작성시간, 내용을 함께 표시합니다.
- 작성시간은 서버 응답의 id를 사용합니다.
- 이전, 다음 버튼 클릭 시 이전페이지, 다음페이지 댓글 목록을 출력합니다.
- 이전, 다음 버튼 클릭 시 해당 페이지가 없으면 페이지를 이동하지 않습니다.
- 댓글은 이름 1자 이상, 내용은 10자 이상 입력해야 합니다.
- `CORS` 이슈는 서버에서 미들웨어를 사용하지 않고 프론트 서버에서 해결합니다.
- IE10이상, Evergreen 브라우저를 지원해야 합니다.

#### 적용예시

![new preview](https://user-images.githubusercontent.com/4216651/108629886-6225c380-74a5-11eb-9090-04409b9554c1.gif)

### 설치

1. 프론트앤드는 `FE/`, 백앤드는 `BE/` 폴더안에 있습니다.
2. 각각 폴더 안에서 `npm install` 로 설치합니다.

```console
$ npm install
```

### 실행 (로컬)

1. 프론트앤드는 `npm run dev` 로 `webpack dev server` 를 실행합니다.
2. 백앤드는 `npm start` 로 서버를 실행합니다.

```console
// 프론트앤드
$ npm run dev

// 백앤드
$ npm start
```

## 프로젝트 모듈 구조

```
.
├── FE/
│   ├── src/
│   │   ├── api/
│   │   │   └── index.ts
│   │   ├── components/
│   │   │   ├── CommentsForm.ts
│   │   │   ├── CommentsHeader.ts
│   │   │   ├── CommentsList.ts
│   │   │   └── CommentsPagination.ts
│   │   ├── interface/
│   │   │   └── index.ts
│   │   ├── store/
│   │   │   └── index.ts
│   │   ├── style/
│   │   │   └── index.css
│   │   ├── test/
│   │   │   └── index.test.ts
│   │   ├── App.ts
│   │   ├── config.ts
│   │   ├── index.ts
│   │   └── utils.ts
│   ├── .babelrc
│   ├── index.html
│   ├── tsconfig.json
│   └── webpack.config.js
└── BE/
    ├── database/
    │   └── comments.json
    ├── service/
    │   └── index.js
    ├── view/
    │   └── index.js
    └── server.js
```

1. `FE/dist/` 는 `$ npm run build` 를 통해 빌드 실행시 생성됩니다. 이번 프로젝트에서는 사용하지 않았습니다.

2. `FE/src/api` 는 서버에 요청하는 API 모듈입니다.

3. `FE/src/index.ts` 에서 렌더를 해주고 `FE/src/App.ts` 가 모듈을 모아주는 역할을 합니다. `FE/src/components` 안에 파일들은 각각 페이지 제목: `CommentsHeader.ts`; 보여지는 댓글 목록 : `CommentsList.ts`; 페이지네이션 : `CommentsPagination.ts`; 댓글 입력폼 : `CommentsForm.ts` 을 구현하는 모듈들입니다.

4. `FE/src/interface` 는 타입을 선언해주는 모듈입니다.

5. `FE/src/store` 는 상태 관리 모듈입니다.

6. `FE/src/test` 는 테스트 관리 모듈입니다. `$ npm test` 를 통해 실행합니다.

7. `config.ts` `utils.ts` 는 각각 API 요청주소, 공통 함수를 관리하는 모듈입니다.

8. `BE/database/comments.json` 에 댓글이 저장되고 `API` 로 요청할 수 있습니다.

9. `BE/service/index.js` 는 서비스 로직 모듈입니다.

10. `BE/view/index.js` 는 앤드포인트들을 모아놓은 모듈입니다.

## 설치 패키지

```json
//BE
"dependencies": {
  "body-parser": "^1.19.0",
  "express": "^4.17.1",
  "q": "^1.5.1"
}

// FE
"dependencies": {
  "core-js": "^3.7.0"
},
"devDependencies": {
  "@babel/core": "^7.11.6",
  "@babel/plugin-transform-runtime": "^7.11.5",
  "@babel/preset-env": "^7.11.5",
  "@babel/preset-typescript": "^7.10.4",
  "@babel/runtime-corejs3": "^7.11.2",
  "@types/jest": "^25.2.3",
  "babel-loader": "^8.1.0",
  "css-loader": "^5.0.2",
  "jest": "^26.6.3",
  "style-loader": "^2.0.0",
  "ts-loader": "^7.0.5",
  "typescript": "^3.9.7",
  "webpack": "^4.44.2",
  "webpack-cli": "^3.3.12",
  "webpack-dev-server": "^3.11.1",
  "whatwg-fetch": "^3.5.0"
```

- `Polyfill` 관련 패키지

  - @babel/core
  - @babel/plugin-transform-runtime
  - @babel/preset-env
  - @babel/preset-typescript
  - @babel/runtime-corejs3
  - core-js
  - babel-loader
  - whatwg-fetch

- `Webpack` 관련 패키지

  - webpack
  - webpack-cli
  - webpack-dev-server

- `TypeScript` 관련 패키지

  - typescript
  - ts-loader

- `jest` 관련 패키지

  - @types/jest
  - jest

- Style 관련 패키지

  - style-loader
  - css-loader

> 모든 패키지는 가장 최근 버전의 바로 이전 메이저 업데이트를 기준으로 하여 설치하였습니다.
>
> 6개월 내외의 패키지를 기준으로 선택하였습니다.
>
> e.g.) 예를들어 version `@12.3.5 / @12.2.3 / @11.8.10 / @11.5.0` 인 경우 11.8.10 을 설치

## 환경설정

### webpack.config.js

```js
const path = require('path');
const { NODE_ENV } = process.env;

const config = {
  entry: './src/index.ts',

  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist',
    filename: 'bundle.js',
  },

  resolve: {
    extensions: ['.ts', '.js'],
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        include: [path.resolve(__dirname, 'src')],
        exclude: [/node_modules/],
        use: ['babel-loader', 'ts-loader'],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};

if (NODE_ENV === 'DEVELOPMENT') {
  config.devServer = {
    disableHostCheck: true,
    host: 'localhost',
    port: 8080,
    historyApiFallback: true,
    hot: true,
    inline: true,
    open: true,
    overlay: true,
    clientLogLevel: 'warning',
    quiet: true,
    proxy: {
      '/api': 'http://localhost:9999/',
    },
  };

  config.devtool = 'inline-source-map';
}

if (NODE_ENV === 'PRODUCTION') {
  config.devtool = 'source-map';
}

module.exports = config;
```

1. 개발모드 `DEVELOPMENT` 와 배포모드 `PRODUCTION` 환경을 분리했습니다.
2. 번들된 모듈은 `/dist` 안 `bundle.js`에 위치합니다.
3. `devServer` 에서 `proxy` 설정을 통해 `cors` 이슈를 관리하였습니다.
4. `ts-loader` > `babel-loader` 순서로 적용하였습니다.

### .babelrc

```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": ["> 0.25%, not dead", "ie >= 11"],
        "modules": "cjs"
      }
    ]
  ],
  "plugins": [
    [
      "@babel/plugin-transform-runtime",
      {
        "corejs": 3,
        "regenerator": true
      }
    ]
  ],
  "env": {
    "test": {
      "presets": [["@babel/preset-env"], "@babel/preset-typescript"]
    }
  }
}
```

1. `core.js3` 을 이용해 컴파일 하였습니다.
2. 테스트 환경에서는 `@babel/preset-typescript`을 통해 `TypeScript` 를 관리하였습니다.

### tsconfig.json

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "noImplicitAny": true,
    "allowJs": true,
    "strict": true,
    "allowSyntheticDefaultImports": true,
    "sourceMap": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "removeComments": true
  },
  "exclude": ["dist", "node_modules"],
  "include": ["**/*.ts"]
}
```

1. `jest` 호환성 이슈로 `common.js`로 컴파일하였습니다.
2. `node_modules/`, `dist/` 는 제외했습니다.

## 기타 참고 사항

### `CORS` 이슈 해결

`webpack dev server`에서 `proxy`설정을 이용해 해결하였습니다

#### webpack.config.js

```js
//...
if (NODE_ENV === 'DEVELOPMENT') {
  config.devServer = {
    disableHostCheck: true,
    host: 'localhost',
    port: 8080,
    historyApiFallback: true,
    hot: true,
    inline: true,
    open: true,
    overlay: true,
    clientLogLevel: 'warning',
    quiet: true,
    proxy: {
      '/api': 'http://localhost:9999/',
    },
  };

  config.devtool = 'inline-source-map';
}
//...
```

테스트 관련 크로스 브라우징 이슈는 `package.json`에서 `testURL`설정을 통해 해결했습니다.

#### package.json

```json
{
  //...
  "jest": {
    "testURL": "http://localhost:9999"
  }
  //...
}
```

인터넷 익스플로러에서 `fetch`를 사용하기 위해 `whatwg-fetch` 모듈을 사용했습니다.

> 본 프로젝트는 인터넷 익스플로러 10, 11 / 크롬 win, mac / 사파리 / 엣지에서 테스트를 거쳤습니다.
