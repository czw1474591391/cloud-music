import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import * as apis from '@/apis/http';
import router from '@/router';

const app = createApp(App);
// 全局挂载http请求库
app.config.globalProperties.$http = apis;
app.use(ElementPlus);
app.use(router);
app.mount('#app');
