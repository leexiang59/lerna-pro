<!--
 * @Description: 
 * @Author: will
 * @Date: 2020-09-19 16:24:50
-->
<template>
  <div id="reactDom"></div>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import { WUpload, reactRender } from "w-components-react";
import "w-components-react/lib/index.css";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  mounted() {
    const target = document.getElementById("reactDom");
    reactRender(WUpload(), target);
    // console.log(1, target);

    // render(<h1>23</h1>, target);
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
