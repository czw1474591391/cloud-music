import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: '/index',
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('@/views/index/index'),
  },
  {
    path: '/playlist',
    name: 'playlist',
    component: () => import('@/views/playlist/playlist'),
  },
  {
    path: '/playlist/detail',
    name: 'playlist-detail',
    component: () => import('@/views/playlist/playlist-detail/playlist-detail'),
  },
  {
    path: '/singer',
    name: 'singer',
    component: () => import('@/views/singer/singer'),
  },
  {
    path: '/myMusic',
    name: 'myMusic',
    component: () => import('@/views/myMusic/myMusic'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
