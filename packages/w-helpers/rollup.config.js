/*
 * @Description:
 * @Author: will
 * @Date: 2020-09-04 20:56:02
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-09-09 20:46:08
 */
import json from "rollup-plugin-json";
import babel from "@rollup/plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import rollupTypescript from "rollup-plugin-typescript2";
import { uglify } from "rollup-plugin-uglify";

export default {
  input: "src/index.ts",
  output: {
    dir: "dist",
    format: "esm", // esm, cjs
    sourcemap: true,
  },
  plugins: [
    // Convert CommonJS modules to ES Modules.
    commonjs(),

    // Convert JSON files to ES Modules.
    json(),

    // Seamless integration with Typescript.
    rollupTypescript({
      tsconfig: "tsconfig.json",
    }),

    // Seamless integration with Babel.
    babel({
      extensions: [".js", ".ts"],
      exclude: "node_modules/**",
      babelHelpers: "bundled",
    }),

    // Minify a bundle with UglifyJS.
    // uglify-js only supports JavaScript (ECMAScript 5).
    // To minify ECMAScript 2015 or above, transpile using tools like Babel.
    // uglify(),
  ],
};
