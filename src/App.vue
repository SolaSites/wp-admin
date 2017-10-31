<template>
    <div id="app">
        <ul>
            <li><router-link exact to="/">Home</router-link></li>
            <li><router-link exact to="/settings">Settings</router-link></li>
            <li><router-link exact to="/login">Login</router-link></li>
        </ul>
        <h1>{{ $route.name }}</h1>
        <router-view v-if="loading === false"/>
    </div>
</template>

<script>
import ajax from "nl-ajax";


export default {
    data() {
        return {
            loading: true,
        };
    },
    created() {
        ajax.authToken = `Bearer ${window.localStorage.token}`;

        ajax.post("/jwt-auth/v1/token/validate").then(res => {
            this.loading = false;
        }).catch(err => {
            this.$router.push({path: "/login"});
            this.loading = false;
        });
    },
}
</script>