import Vue from 'vue'
import VueRouter from 'vue-router'
import Land from '../views/Landing'
import User from "../views/User"
import Login from "../views/User/Login"
import Register from "../views/User/Register"
import Forget from "../views/User/Forget"
import Home from '../views/Home/Home'
import Features from '../views/Home/Features'
import Review from '../views/Home/Reviews'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Land,
        children: [{
            path: "",
            redirect: "home"
        },
        {
            path: 'home',
            component: Home
        },
        {
            path: 'features',
            component: Features
        },
        {
            path: 'reviews',
            component: Review
        },
        ]
    },
    {
        path: '/user',
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
        path: '/dashboard',
        component: () => import('../views/Dashboard'),
        children: [{
            path: '',
            component: () => import('../views/Dashboard/Home'),
        }, {
            path: 'view',
            component: () => import('../views/Dashboard/View'),
        }, {
            path: 'create',
            component: () => import('../views/Dashboard/Create'),
        }, {
            path: 'settings',
            component: () => import('../views/Dashboard/Settings'),
        }]
    }
]

const router = new VueRouter({
    routes
})

export default router
