import Vue from 'vue'
import VueRouter from 'vue-router'
import DatasetVis from "@/components/DatasetVisPage";
import MainPage from "@/components/MainPage";

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'hash',
    routes: [
        {
            path: '/',
            component: MainPage,
        },
        {
            path: '/vis',
            component: DatasetVis,
        },


    ]
});

export default router