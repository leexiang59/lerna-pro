<template>
  <div id="app">
    <div id="reactDom"></div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <button @click="handleRender">渲染</button>
    <button @click="handleDestory">销毁</button>
    <button @click="handleChange">修改</button>
    <div id="vueDom"></div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import Vue from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import { reactMount, reactUnMount, WUpload } from "w-components-react";
import "w-components-react/lib/index.css";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  data() {
    return {
      target: null,
      reactData: { times: 1 }
    };
  },
  watch: {
    "reactData.times": function() {
      this.handleRender();
    }
  },
  methods: {
    // 渲染react组件
    handleRender() {
      reactMount(WUpload(this.reactData), this.target);
    },

    // 修改组件状态、重新渲染
    handleChange() {
      this.reactData.times += 1;
      // this.handleRender();
    },

    // 销毁react组件
    handleDestory() {
      reactUnMount(this.target);
      this.reactData = null;
    }
  },
  mounted() {
    // 渲染react组件，方法一
    this.target = document.getElementById("reactDom");
    this.handleRender();

    // 渲染react组件，方法二
    // VueWUpload({
    //   props
    // }).$mount("#vueDom");
  },
  destroyed() {
    this.handleDestory();
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
