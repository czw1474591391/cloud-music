import { createApp } from 'vue';
import App from './App';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import * as apis from '@/apis/http';
import router from '@/router';
import '@/utils/rem.js'; // 引入rem布局方案
import 'https://at.alicdn.com/t/font_2871490_kjtxjgmak3r.js';
import moment from 'moment';
import 'moment/dist/locale/zh-cn';
moment.locale('zh-cn');

const app = createApp(App);
// 全局挂载http请求库
app.config.globalProperties.$http = apis;
app.use(ElementPlus);
app.use(router);
app.mount('#app');
