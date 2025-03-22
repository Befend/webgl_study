import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/class01',
      name: 'class01',
      component: () => import('../views/examples/class01.vue')
    },
    {
      path: '/class02',
      name: 'class02',
      component: () => import('../views/examples/class02.vue')
    },
    {
      path: '/class03',
      name: 'class03',
      component: () => import('../views/examples/class03.vue')
    },
    {
      path: '/class04',
      name: 'class04',
      component: () => import('../views/examples/class04.vue')
    }
  ]
});

export default router;
