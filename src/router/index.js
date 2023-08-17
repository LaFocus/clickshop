import { createRouter, createWebHashHistory } from 'vue-router'

function load(component) {
  return () => import(`@/views/${component}.vue`)
}

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [],
    
  mode: 'history'
})

export default router