import "./styles/style.scss";
import "./styles/libs/antd.scss";

import Antv from "ant-design-vue";
import App from "./App.vue";
import TheTransition from "./components/common/TheTransition";
import Vue from "vue";
import VueCarousel from "vue-carousel";
import router from "./router";
import store from "./store";


Vue.component("TheTransition", TheTransition);

Vue.config.productionTip = false;

Vue.use(Antv);
Vue.use(VueCarousel);
var VueScrollTo = require('vue-scrollto');
Vue.use(VueScrollTo)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
