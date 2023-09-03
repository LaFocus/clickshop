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
      path: '/payment',
      name: 'Payment',
      component: load('PaymentDevilery'),
    },
    {
      path: '/contacts',
      name: 'Contacts',
      component: load('Contacts'),
    },
    {
      path: '/productpage/:id',
      name: 'ProductCard',
      component: load('ProductCard')
    },
    {
      path: '/productpage/shoppingcart',
      name: 'Shoppingcart',
      component: load('ShoppingCart')
    },
    {
      path: '/like',
      name: 'Selected',
      component: load('SelectedCards')
    },
  ],
    
  mode: 'history'
})

export default router