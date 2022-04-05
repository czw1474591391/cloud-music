import api from '@/utils/axios';
const search = ({ keywords = '' }) => {
  return api.get(`/search?keywords=${keywords}`, {});
};
export { search };
