import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: '/index',
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('@/views/index/index.vue'),
  },
  {
    path: '/playlist',
    name: 'playlist',
    component: () => import('@/views/playlist/playlist.vue'),
  },
  {
    path: '/singer',
    name: 'singer',
    component: () => import('@/views/singer/singer.vue'),
  },
  {
    path: '/myMusic',
    name: 'myMusic',
    component: () => import('@/views/myMusic/myMusic.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
