import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/class01',
      name: 'class01',
      component: () => import('../views/examples/class01.vue')
    }
  ]
});

export default router;
