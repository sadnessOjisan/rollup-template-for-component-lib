# rollup-template-for-component-lib

component library を作るための rollup template

## note

https://github.com/styled-components/styled-components/issues/3045#issuecomment-687088347 の問題があるので s-c は 4.4.1 にデグレした

## todo

- [x] TS 対応
- [x] 型定義を出力
- [x] 画像読み込み(png, jpg, gif)
- [x] tag から npm publish
- [x] minify
- [x] styling
- [ ] test を追加
- [ ] bundle size が大きい

## Q

- コンポーネントライブラリを作る時、tsc の target / module は ESNext にしといていいか？（呼び出す側でトランスパイルされる前提）
- rollup で TS 利用、型定義の出力サポート的に rollup-plugin-typescript2 を使うべき？ (not @rollup/plugin-typescript)
