import Vue from 'vue';
import Router from 'vue-router';
import Nprogress from 'nprogress';
import 'nprogress/nprogress.css';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/login',
      component: () => import('../pages/login.vue'),
      meta: { title: 'login' },
    },
    {
      path: '/',
      component: () => import('../pages/layout.vue'),
    },
    {
      path: '/user',
      component: () => import('../pages/layout.vue'),
      children: [
        {
          path: 'list',
          component: () => import('../pages/user/index.vue'),
        },
      ],
    },
    {
      path: '/category',
      component: () => import('../pages/layout.vue'),
      children: [
        {
          path: 'law',
          component: () => import('../pages/category/law.vue'),
        },
      ],
    },
    {
      path: '/content',
      component: () => import('../pages/layout.vue'),
      children: [
        {
          path: ':id',
          component: () => import('../pages/content/index.vue'),
        },
      ],
    },
    { path: '*', component: () => import('../components/NotFound.vue') },
  ],
});

router.beforeEach((to, from, next) => {
  Nprogress.start();
  next();
});

router.afterEach(() => {
  Nprogress.done();
});

export default router;
