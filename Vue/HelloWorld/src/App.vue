<template>
    <div id="app">
        <ul>
            <li>
                <router-link to="/user">Users</router-link>
            </li>
            <li>
                <router-link to="/">Test</router-link>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
    import VueRouter from "vue-router";

    export default {
        name: 'app',
        components: [
            VueRouter
        ]
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
