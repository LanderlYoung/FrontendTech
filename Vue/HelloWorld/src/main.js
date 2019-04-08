import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from "vue-router";
import Users from "./components/Users";
import Test from "./components/Test";

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/user',
            component: Users
        },
        {
            path: '/',
            component: Test
        }
    ]
})

new Vue({
    render: h => h(App),
    router,
}).$mount('#app')
