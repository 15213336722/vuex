import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const Routers = [
    {
        path: '/index',
        meta: {
            title: '首页'
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    },
    {
        path: '/state',
        meta: {
            title: 'State'
        },
        component: (resolve) => require(['./views/state.vue'], resolve)
    },
    {
        path: '/getter',
        meta: {
            title: 'getter'
        },
        component: (resolve) => require(['./views/getter.vue'], resolve)
    },
    {
        path: '/mutation',
        meta: {
            title: 'mutation'
        },
        component: (resolve) => require(['./views/mutation.vue'], resolve)
    },
    {
        path: '/action',
        meta: {
            title: 'Action'
        },
        component: (resolve) => require(['./views/Action.vue'], resolve)
    },
    {
        path: '/module',
        meta: {
            title: 'Module'
        },
        component: (resolve) => require(['./views/module.vue'], resolve)
    },
    {
        path: '*',
        redirect: '/index'
    }
]
    , RouterConfig = {
    mode: 'history'
    , routes: Routers
}
    , router = new Router(RouterConfig);
router.beforeEach((to, from, next) => {
    window.document.title = to.meta.title;
    next();
});
export default router;