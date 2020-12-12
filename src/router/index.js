import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: () => import('../views/Landing'),
        children: [{
            path: "",
            redirect: "home"
        },
        {
            path: 'home',
            component:() => import("../views/Home/Home"),
        },
        {
            path: 'features',
            component: () => import('../views/Home/Features'),
        },
        {
            path: 'reviews',
            component: () => import('../views/Home/Reviews'),
        },
        ]
    },
    {
        path: '/user',
        component: () => import("../views/User"),
        children: [{
            path: 'login',
            component: () => import("../views/User/Login"),
        }, {
            path: 'register',
            component: () => import('../views/User/Register'),
        }, {
            path: 'forget',
            component: () => import('../views/User/Forget'),
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
