import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

// 移动端适配
import "lib-flexible";

// 权限控制
import "@/utils/auth.js";

// 引入elementui
import Element from "element-ui";
import "./styles/element-var.scss";
Vue.use(Element);

// 基础ui库
import "./assets/css/zcm-main.css";

// 引入lodash
import _ from "lodash";
Vue.prototype._ = _;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
