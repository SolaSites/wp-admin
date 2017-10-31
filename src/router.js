import Vue from "vue";
import Router from "vue-router";
import Home from "@/pages/Home";
import Settings from "@/pages/Settings";
import Login from "@/pages/Login";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home,
        },
        {
            path: "/settings",
            name: "Settings",
            component: Settings,
        },
        {
            path: "/login",
            name: "Login",
            component: Login,
        },
    ],
});
