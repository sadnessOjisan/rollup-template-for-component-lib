# rollup-template-for-component-lib

component library を作るための rollup template

## todo

- [x] TS 対応
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

### 複数ファイル不要

```
[!] Error: You must set either "output.file" for a single-file build or "output.dir" when generating multiple chunks.
```

型定義ファイルを出力するから 複数吐かれる。なので file は不要で dir のみ定義

## declaration

型定義を履こうと declaration: true にすると rollup でのビルドが

```
[!] (plugin typescript) Error: @rollup/plugin-typescript: 'outDir' or 'declarationDir' must be specified to generate declaration files.
```

## Q

- コンポーネントライブラリを作る時、tsc の target / module は ESNext にしといていいか？（呼び出す側でトランスパイルされる前提）
