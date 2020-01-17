import axios from 'axios';

export const baseUrl = 'http://api.inner.ink';

//axios 的实例及拦截器配置
const instance = axios.create ({
  baseURL: baseUrl
});

instance.interceptors.response.use (
  res => res.data,
  err => {
    console.log (err, "网络错误");
  }
);

export default instance;