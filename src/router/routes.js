import Vue from 'vue'
import VueRouter from 'vue-router'
import CmsComponent from '../components/Cms.vue'
import LoginComponent from '../components/Login.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: {
                name: 'login'
            }
        },
        {
            path: '/login',
            name: 'login',
            component: LoginComponent
        },
        {
            path: '/cms',
            name: 'cms',
            component: CmsComponent
        }
    ]
})