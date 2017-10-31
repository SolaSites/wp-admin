<template>
    <div>
        <input type="text" v-model="username" placeholder="username">
        <input type="password" v-model="password" placeholder="password">
        <button @click="attempt">Login</button>
    </div>
</template>

<script>
import ajax from "nl-ajax";


export default {
    data () {
        return {
            username: null,
            password: null,
        };
    },
    methods: {
        attempt() {
            ajax.post("/jwt-auth/v1/token", {username: this.username, password: this.password}, false).then(res => {
                ajax.authToken = `Bearer ${res.token}`;
                window.localStorage.token = res.token;
                this.$router.push({path: "/"});
            }).catch(err => {
                console.log(err);
            });
        },
    },
}
</script>