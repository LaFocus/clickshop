import { createRouter, createWebHashHistory } from 'vue-router'

function load(component) {
  return () => import(`@/views/${component}.vue`)
}

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: load('Home'),
    },
    {
      path: '/iphone',
      name: 'Iphone',
      component: load('ProductCard'),
    },
    {
      path: '/payment',
      name: 'Payment',
      component: load('PaymentDevilery'),
    },
    {
      path: '/contacts',
      name: 'Contacts',
      component: load('Contacts'),
    },
  ],
    
  mode: 'history'
})

export default router