import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store";
import ajax from "nl-ajax";


ajax.prefix = "https://solatest.wpengine.com/wp-json";
ajax.authHeader = "Authorization";

Vue.config.productionTip = false;

new Vue({
    el: "#app",
    router,
    store,
    template: "<App/>",
    components: { App },
});
