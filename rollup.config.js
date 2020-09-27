import typescript from "rollup-plugin-typescript2"; // d.ts の出力の都合上、@rollup/plugin-typescriptは使わない
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs"; // TODO: これが何で必要になるか調べる
import { terser } from "rollup-plugin-terser";
import image from "@rollup/plugin-image";

export default {
  input: "src/index.ts",
  output: {
    file: "dist/bundle.js",
    format: "cjs",
    sourcemap: true,
  },
  // TODO: 読み込み順を考える
  plugins: [nodeResolve(), commonjs(), typescript(), image(), terser()],
};
