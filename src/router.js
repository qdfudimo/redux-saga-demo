import {
    createRouter,
    createWebHashHistory
} from 'vue-router';
import routes from "./nav.js"
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