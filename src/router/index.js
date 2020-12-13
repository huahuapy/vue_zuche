import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/home.vue'
import Login from '../views/login/login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/user',
        name: 'User',
        component: () => import('../views/user/User')
      }
    ]
  },
  {
    path: '/login',
    component: Login,
    name: 'Login'
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
