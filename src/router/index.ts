import AuthorQuoteList from '@/views/AuthorQuoteList.vue'
import RandomQuote from '@/views/RandomQuote.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Random Quote',
      component: RandomQuote
    },
    {
      path: '/author/:author',
      name: 'author',
      component: AuthorQuoteList,
      props: true
    }
  ]
})

export default router
