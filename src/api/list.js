import http from "../utils/http";

// 获取轮播图
export const getBannerRequest = () => {
  return http.get('/banner');
}

// 获取推荐歌单
export const getRecommendListRequest = () => {
  return http.get('/personalized');
}