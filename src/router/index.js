import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Home from '../views/Home.vue'

const routes = [{
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/About.vue')
  },
  {
    path: '/',
    name: 'Add',
    component: () => import('../views/UserCreate.vue')
  },
  {
    path: '/users',
    name: 'Users',
    component: () => import('../views/UserList.vue')
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    component: () => import('../views/UserEdit.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router