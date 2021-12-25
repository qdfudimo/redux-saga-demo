import {
    createRouter,
    createWebHashHistory
} from 'vue-router';
const routes = [{
        title: '按钮',
        name: 'Button',
        path: '/components/Button',
        component: () => import(`../packages/Button/docs/README.md`),
    },
    {
        title: '输入框',
        name: 'Input',
        path: '/components/Input',
        component: () => import(`../packages/Input/docs/README.md`),
    }
];

const routerConfig = {
    history: createWebHashHistory(),
    routes,
    scrollBehavior(to, from) {
        if (to.path !== from.path) {
            return {
                top: 0
            };
        }
    },
};

const router = createRouter(routerConfig);

export default router;