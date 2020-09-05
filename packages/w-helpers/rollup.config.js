/*
 * @Description:
 * @Author: will
 * @Date: 2020-09-04 20:56:02
 * @LastEditors: will
 * @LastEditTime: 2020-09-05 16:43:08
 */
// import json from 'rollup-plugin-json';
import commonjs from "rollup-plugin-commonjs";
import rollupTypescript from "rollup-plugin-typescript2";

export default {
  input: "./index.ts",
  output: {
    dir: "dist",
    format: "cjs",
  },
  plugins: [
    commonjs(),
    rollupTypescript({
      tsconfig: "tsconfig.json",
    }),
  ],
};
