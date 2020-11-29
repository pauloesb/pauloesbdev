import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import MainIndex from '@/screens/Main/components/Index.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'MainIndex',
    component: MainIndex,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
