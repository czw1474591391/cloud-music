import api from '@/utils/axios';
const { get, post } = api;

const search = ({ keywords = '' }) => get(`/search?keywords=${keywords}`, {});

// 获取轮播图，调用例子/banner?type=2,
// 0:pc 1:android 2:iphone 3: ipad
const banner = (num = 0) => get(`/banner?type=${num}`, {});

// 获取热门歌单 调用例子/top/playlist?limit=10&order=new
// cat:标签 '古风' '民谣' 等等 limit:取出歌单数量 默认50
const hotPlayList = (limit = 6, cat = '流行') => get(`/top/playlist?limit=${limit}&cat=${cat}`);

export { search, banner, hotPlayList };
