import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

/* 导入VANT */
import Vant from 'vant';
import { Lazyload } from 'vant';
import './assets/reset.min.css';
import 'amfe-flexible';   // font-size: 37.5
// import 'lib-flexible/flexible.js';   // font-size: 37.52   多余的0.02
import 'vant/lib/index.css';

/* 处理最大宽度 */
import { handleMaxWidth } from './assets/utils';
handleMaxWidth();
window.addEventListener('resize', handleMaxWidth);
// createApp(App).use(store).use(router).mount('#app')
const app = createApp(App);
app.use(Vant);
app.use(Lazyload, {
  lazyComponent: true,
});
app.use(store);
app.use(router);
app.mount('#app');