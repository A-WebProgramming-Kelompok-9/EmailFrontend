import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import User from "../views/User"
import Login from "../views/User/Login"
import Register from "../views/User/Register"
import Forget from "../views/User/Forget"

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/user',
        name: 'User',
        component: User,
        children: [{
            path: 'login',
            component: Login,
        }, {
            path: 'register',
            component: Register,
        }, {
            path: 'forget',
            component: Forget,
        },]
    },
    {
        path: '/dashboard/:id',
        name: 'Dashboard',
        component: () => import('../views/Dashboard'),
        children: [{
            path: '',
            component: () => import('../views/Dashboard/Home'),
        }, {
            path: 'view/:email',
            component: () => import('../views/Dashboard/View'),
        }, {
            path: 'create',
            component: () => import('../views/Dashboard/Create'),
        }, {
            path: 'setting',
            component: () => import('../views/Dashboard/Settings'),
        }]
    }
]

const router = new VueRouter({
    routes
})

export default router
