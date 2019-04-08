<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <test prop-message="hello"></test>
        <users></users>
    </div>
</template>

<script>
    import Test from './components/Test'
    import Users from "./components/Users";


    export default {
        name: 'app',
        components: {
            Users,
            Test
        }
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
