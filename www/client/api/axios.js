import axios from 'axios'
import querystring from 'querystring'

const ax = axios.create({
  baseURL: 'http://127.0.0.1:3000/api'
})


// 拦截器
ax.interceptors.request.use(config => {
  // config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
  // config.headers['Cache-Control'] = 'no-cache'
  if (
    config.method === 'post' ||
    config.method === 'put' ||
    config.method === 'delete' ||
    config.method === 'patch'
  ) {
    config.data = querystring.stringify(config.data)
  }
  return config
}, error => {
  return Promise.reject(error)
})



ax.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.reject(error)
})

export default ax
