import api from '@/utils/axios';
const search = ({ keywords = '' }) => api.get(`/search?keywords=${keywords}`, {});

// 获取轮播图，调用例子/banner?type=2,0:pc 1:android 2:iphone 3:ipad
const banner = (num = 0) => api.get(`/banner?type=${num}`, {});

export { search, banner };
