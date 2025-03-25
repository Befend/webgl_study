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
    }
  ]
});

export default router;
