import Vue from "vue";
import Vuex from "vuex";
import App from "./App";
import storeState from "./store";
import router from "./router";
import VueResource from "vue-resource";
import LazyLoadDirective from "./directives/LazyLoadDirective";
import "./filters";
import { TOKEN, METHODANDOWNERID } from "./config";

Vue.directive("lazyload", LazyLoadDirective);
Vue.use(VueResource);
Vue.use(Vuex);
Vue.http.options.emulateJSON = true;
Vue.config.productionTip = false;

const token = TOKEN;
const method = METHODANDOWNERID;

const getParams = obj => {
  return Object.keys(obj)
    .map(k => encodeURIComponent(k) + "=" + encodeURIComponent(obj[k]))
    .join("&");
};
const getURL = (method, params) => {
  if (!method) throw new Error("Enter method");
  params = params || {};
  params["access_token"] = token;
  return (
    "https://api.vk.com/method/" + method + "?" + getParams(params) + "&v=5.59"
  );
};

const store = new Vuex.Store(storeState);

new Vue({
  el: "#app",
  router,
  store,
  beforeCreate() {
    this.$http
      .jsonp(getURL(method, { offset: 1, album_id: 1, extended: 1 }))
      .then(response => {
        return response.json();
      })
      .then(data => {
        return data.response.items.map(items => {
          delete items.availability;
          delete items.category;
          delete items.date;
          delete items.date;
          items.cost = Number(items.price.amount) / 100;
          delete items.price;
          return items;
        });
      })
      .then(data => {
        this.$store.dispatch("getData", data);
      });
  },
  components: { App },
  template: "<App/>"
});
