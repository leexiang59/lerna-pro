/*
 * @Description:
 * @Author: will
 * @Date: 2020-09-04 20:56:02
 * @LastEditors: will
 * @LastEditTime: 2020-09-04 21:25:00
 */
// import json from 'rollup-plugin-json';
import rollupTypescript from "rollup-plugin-typescript2";

export default {
  input: "./index.ts",
  output: {
    dir: "dist",
    format: "cjs",
  },
  plugins: [
    rollupTypescript({
      tsconfig: "tsconfig.json",
    }),
  ],
};
