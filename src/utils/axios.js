import axios from 'axios';

const instance = axios.create({
  timeout: 12000,
  // `withCredentials` 表示跨域请求时是否需要使用凭证
  withCredentials: true,
  // `validateStatus` 定义对于给定的HTTP 响应状态码是 resolve 或 reject  promise 。
  // 如果 `validateStatus` 返回 `true` (或者设置为 `null` 或 `undefined`)，promise 将被 resolve; 否则，promise 将被 rejecte
  validateStatus: status => {
    return status >= 200 && status < 300; // default
  },
  baseURL: 'https://music-api-git-master-czw1474591391.vercel.app', // 服务端域名
});

// 添加请求拦截器
instance.interceptors.request.use(
  config => config,
  // 在发送请求之前做些什么;
  error => Promise.reject(error)
  // 对请求错误做些什么
);

// 添加响应拦截器
instance.interceptors.response.use(
  response => (response.data.code !== 200 ? ElMessage.error('网络错误') : response.data),
  // 对响应数据做点什么;
  error => Promise.reject(error)
  // 对响应错误做点什么
);

const api = {};
['get', 'post'].forEach(method => {
  api[method] = (uri, data, config) => {
    return new Promise((resolve, reject) => {
      instance[method](uri, data, config)
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
  };
});

export default api;
