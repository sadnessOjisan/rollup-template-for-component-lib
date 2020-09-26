# rollup-template-for-component-lib

component library を作るための rollup template

## todo

- [ ] TS 対応
- [ ] 型定義を出力
- [ ] 画像読み込み(png, jpg, gif)
- [ ] tag から npm publish
- [ ] minify
- [ ] styling

## trouble shooting

### tslib

```
src/index.ts → dist/bundle.js...
(node:19276) UnhandledPromiseRejectionWarning: Error: Cannot find module 'tslib/tslib.es6.js' from '/Users/ojisan/Documents/project/rollup-template-for-component-lib/node_modules/@rollup/plugin-typescript/dist'
```

tslib 入れたら解決. @rollup/plugin-typescript" の peerDeps

## Q

- コンポーネントライブラリを作る時、tsc の target / module は ESNext にしといていいか？（呼び出す側でトランスパイルされる前提）
