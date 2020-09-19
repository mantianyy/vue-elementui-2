import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/views/Main.vue'),
    children: [
      { name: 'home', path: '/', component: () => import('@/views/home/Home') },
      { name: 'video', path: '/video', component: () => import('@/views/user-manager/UserManager') },
      { name: 'other1', path: '/other/other1', component: () => import('@/views/other/PageOne') },
      { name: 'other2', path: '/other/other2', component: () => import('@/views/other/PageTwo') },
      { name: 'user', path: '/user', component: () => import('@/views/video-manager/VideoManager') }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
