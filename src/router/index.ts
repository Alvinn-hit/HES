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
      meta: {name: '主页'},
    },
    {
      path: '/user',
      component: () => import('../pages/layout.vue'),
      children: [
        {
          path: 'list',
          component: () => import('../pages/user/index.vue'),
          meta: {name: '用户管理'},
        },
      ],
    },
    {
      path: '/category',
      component: () => import('../pages/layout.vue'),
      children: [
        {
          path: ':id',
          component: () => import('../pages/category/law.vue'),
          meta: {name: '类别管理'},
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
          meta: {name: '内容管理'},
        },
      ],
    },
    { path: '*', component: () => import('../components/NotFound.vue') },
  ],
});

router.beforeEach((to, from, next) => {
  Nprogress.start();
  const token = sessionStorage.getItem('token');
  if (token) {
    if (to.path === '/login') {
      next({path: '/'});
    } else {
      next();
    }
  } else {
    if (to.path === '/login') {
      next();
    } else {
      next({path: '/login'});
    }
  }
});

router.afterEach(() => {
  Nprogress.done();
});

export default router;
