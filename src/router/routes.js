import Home from '@/pages/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/detail/:id',
    component: () => import(/* webpackChunkName: 'others' */'@/pages/Detail.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: 'others' */'@/pages/Login.vue')
  },
  {
    path: '/person',
    name: 'Person',
    component: () => import(/* webpackChunkName: 'others' */'@/pages/Person.vue')
  },
  {
    path: '/store',
    name: 'Store',
    component: () => import(/* webpackChunkName: 'others' */'@/pages/Store.vue')
  },
  {
    path: '/updatePerson',
    name: 'UpdatePerson',
    component: () => import(/* webpackChunkName: 'others' */'@/pages/UpdatePerson.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  },
];

export default routes;