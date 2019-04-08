import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from "vue-router";
import StoryList from "./components/StoryList";
import StoryBrief from "./components/StoryBrief";
import StoryDetail from "./components/StoryDetail";

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/',
            component: StoryList
        },
        {
            path: "/storyDetail/:storyId",
            component: StoryDetail
        }
    ]
})

new Vue({
    render: h => h(App),
    router
}).$mount('#app')

