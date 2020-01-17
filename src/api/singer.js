import http from "../utils/http";

export const getHotSingerListRequest = (count) => {
  return http.get(`/top/artists?offset=${count}`);
}

export const getSingerListRequest= (category, alpha, count) => {
  return http.get(`/artist/list?cat=${category}&initial=${alpha.toLowerCase()}&offset=${count}`);
}