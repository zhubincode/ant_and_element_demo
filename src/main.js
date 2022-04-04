import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vant from "vant";
import "vant/lib/index.css";


import VueClipboard from "vue-clipboard2";

import axios from "axios";

// axios.defaults.baseURL = "http://localhost:9001/api";
// axios.defaults.baseURL = "https://dsmpapi.toomey.top/api";
axios.defaults.baseURL = "http://dsmpapi.zbcode.cn/api";

/**
 * JS 时间格式化参数
 * 参数：格式化字符串如：'yyyy-MM-dd HH:mm:ss'
 * 结果：如2017-09-15 10:09:00
 */
Date.prototype.format = function (fmt) {
  var o = {
    "M+": this.getMonth() + 1,
    "d+": this.getDate(),
    "H+": this.getHours(),
    "m+": this.getMinutes(),
    "s+": this.getSeconds(),
    "q+": Math.floor((this.getMonth() + 3) / 3),
    S: this.getMilliseconds(),
  };
  var year = this.getFullYear().toString();
  year = year.length >= 4 ? year : "0000".substr(0, 4 - year.length) + year;

  if (/(y+)/.test(fmt))
    fmt = fmt.replace(RegExp.$1, (year + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt))
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
  return fmt;
};

Vue.prototype.$axios = axios;

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueClipboard);
Vue.use(Vant);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
