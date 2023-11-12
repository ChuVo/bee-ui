import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'buttons',
    component: () => import('../views/ButtonsPage.vue')
  },
  {
    path: '/text-fields',
    name: 'TextFields',
    component: () => import('../views/TextFieldsPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
