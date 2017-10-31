<template>
    <div>
        <p>This is the settings page.</p>
        <input type="text" v-model="title" placeholder="Website title...">
        <button @click="changeTitle">Change Title</button>
    </div>
</template>

<script>
import ajax from "nl-ajax";


export default {
    data () {
        return {
            title: null,
        };
    },
    methods: {
        changeTitle() {
            ajax.post("/wp/v2/settings", {title: this.title}).then(res => {
                console.log(res);
            }).catch(err => {
                console.log(err);
            });
        },
    },
}
</script>