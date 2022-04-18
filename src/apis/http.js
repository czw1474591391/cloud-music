import api from '@/utils/axios';
const { get, post } = api;

const search = ({ keywords = '' }) => get(`/search?keywords=${keywords}`);

// 获取轮播图
// 0:pc 1:android 2:iphone 3: ipad
const banner = (num = 0) => get(`/banner?type=${num}`);

// 获取热门歌单
// cat:标签 '古风' '民谣' 等等 limit:取出歌单数量 默认50
const hotPlayList = ({ limit = 6, cat = '流行' }) => get(`/top/playlist?limit=${limit}&cat=${cat}`);

// 获取歌单详情
const playListDetail = (id = 6928102820) => get(`/playlist/detail?id=${id}`);

// 获取新碟上架
// limit取出数量、offset偏移数量，用于分页 area：all全部 ZH:华语 EA:欧美 KR:韩国 JP:日本
// year 年，month月
const newDiscShelves = ({ offset = 0, limit = 12, type = 'new', area = 'all' } = {}) =>
  get(`/top/album?limit=${limit}&offset=${offset}&area=${area}&type=${type}`);

// 获取所有榜单
const allTopList = () => get('/toplist');

export { search, banner, hotPlayList, playListDetail, newDiscShelves, allTopList };
