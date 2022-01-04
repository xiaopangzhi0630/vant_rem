import { createRouter, createWebHashHistory } from 'vue-router';
import routes from './routes';
import store from "@/store/index";
import api from '@/api/index';
import { Toast } from 'vant';

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

router.beforeEach(async (to, from, next) => {
    let arr = ['/person', '/updateperson', '/store'];
    if (arr.includes(to.path)) {
        // 校验是否登录
        let isLogin = store.state.isLogin;
        if (isLogin) {
            next();
            return;
        }
        if (isLogin === false) {
            Toast('小主，请您先登录哦~');
            next('/login');
            return;
        }
        if (isLogin === null) {
            try {
                let { code, data } = await api.checkLogin();
                if (+code !== 0) {
                    Toast('小主，请您先登录哦~');
                    next('/login');
                    return;
                }
                store.commit('changeIsLogin', true);
                store.commit('changeInfo', data);
                next();
            } catch (err) { }
            return;
        }
    }
    next();
});
export default router;