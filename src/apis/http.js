import api from '@/utils/axios';
const { get, post } = api;

const search = ({ keywords = '' }) => get(`/search?keywords=${keywords}`);

/**
 * 获取轮播图
 * @param {number}
 * @property {number} type 0: pc 1: android 2: iphone 3: ipad
 * @returns
 */
const banner = (num = 0) => get(`/banner?type=${num}`);

/**
 * 获取热门歌单
 * @param {object}
 * @property {number} limit 取出歌单数量
 * @property {string} order 'new' 和 'hot', 分别对应最新和最热
 * @property {string} cat tag, 比如 " 华语 "、" 古风 " 、" 欧美 "、" 流行 ", 默认为 "全部",可从歌单分类接口获取(/playlist/catlist)
 * @returns
 */
const hotPlayList = ({ limit = 6, cat = '流行' }) => get(`/top/playlist?limit=${limit}&cat=${cat}`);

/**
 * 获取歌单详情
 * @param {number}
 * @property {number} id 歌单id
 * @returns
 */
const playListDetail = id => get(`/playlist/detail?id=${id}`);

/**
 * 获取新碟上架
 * @param {object}
 * @property {number} year 年
 * @property {number} month 月
 * @property {number} limit 取出数量
 * @property {number} offset 偏移数量，用于分页
 * @property {string} type new:全部 hot:热门,默认为 new
 * @property {string} area all全部 ZH:华语 EA:欧美 KR:韩国 JP:日本
 * @returns
 */
const newDiscShelves = ({ offset = 0, limit = 12, type = 'new', area = 'all' } = {}) =>
  post(`/top/album?limit=${limit}&offset=${offset}&area=${area}&type=${type}`);

/**
 * 获取新碟上架
 * @returns
 */
const allTopList = () => get('/toplist');

export { search, banner, hotPlayList, playListDetail, newDiscShelves, allTopList };
