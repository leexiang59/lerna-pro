/*
 * @Description:
 * @Author: will
 * @Date: 2020-09-04 20:56:02
 * @LastEditors: will
 * @LastEditTime: 2020-09-06 15:05:05
 */
import json from "rollup-plugin-json";
import babel from "@rollup/plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import { uglify } from "rollup-plugin-uglify";
import rollupTypescript from "rollup-plugin-typescript2";

export default {
  input: "src/index.ts",
  output: {
    dir: "dist",
    format: "cjs",
    sourcemap: true,
  },
  plugins: [
    // Convert CommonJS modules to ES Modules.
    commonjs(),

    // Seamless integration with Typescript.
    rollupTypescript({
      tsconfig: "tsconfig.json",
    }),

    // Convert JSON files to ES Modules.
    json(),

    // Seamless integration with Babel.
    babel({
      extensions: [".js", ".ts"],
      exclude: "node_modules/**",
      babelHelpers: "bundled",
    }),

    // Minify a bundle with UglifyJS.
    // uglify-js only supports JavaScript (ECMAScript 5).
    // To minify ECMAScript 2015 or above, transpile using tools like Babel.
    uglify(),
  ],
};
