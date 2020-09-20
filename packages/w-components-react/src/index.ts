/*
 * @Description:
 * @Author: will
 * @Date: 2020-09-18 21:20:17
 */
// import Vue from "vue";
// import toVue from "@egoist/react-to-vue";
import ReactDOM from "react-dom";
import WUpload from "./WUpload";
import "./index.less";

const reactMount = (ele, target) => {
  ReactDOM.render(ele, target);
};

const reactUnMount = (target) => {
  ReactDOM.unmountComponentAtNode(target);
};

// const VueWUpload = (props) =>
//   new Vue({
//     ...props,
//     render: (h) => h(toVue(WUpload(props.props)))
//   });

// const VueWUpload = toVue(WUpload);

export { reactMount, reactUnMount, WUpload };
