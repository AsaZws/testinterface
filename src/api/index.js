import axios from 'axios'
// import router from '../router/router'
// import iView from 'iview'
import qs from 'qs'

axios.defaults.timeout = 5000
// 配置默认 url
axios.defaults.baseURL = 'http://localhost:8888'
axios.defaults.withCredentials = true

// http request 拦截器
axios.interceptors.request.use(
  config => {
    config.data = JSON.stringify(config.data)
    config.paramsSerializer = (params) => {
      return qs.stringify(params, { indices: false })
    }
    // iView.LoadingBar.start()
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// http response 拦截器
axios.interceptors.response.use(
  response => {
    // iView.LoadingBar.finish()
    if (response.data.code === '404') {
      console.log("404页面，返回登录页面");
      
      // router.push({
      //   path: '/login',
      //   querry: { redirect: router.currentRoute.fullPath } // 从哪个页面跳转
      // })
    }
    return Promise.resolve(response)
  },
  error => {
    // iView.LoadingBar.error()
    return Promise.reject(error)
  }
)

/***
 * 封装 HTTP 请求
 * @param url
 * @param data
 * @return {Promise}
 */

function apiAxios (method, url, params) {
  return new Promise((resolve, reject) => {
    axios({
      method: method,
      url: url,
      data: method === 'POST' || method === 'PUT' ? params : null,
      params: method === 'GET' || method === 'DELETE' ? params : null,
      headers: method === 'POST' || method === 'PUT' ? { 'Content-Type': 'application/json;charset=UTF-8' } : { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' }
    }).then(function (res) {
      resolve(res)
    }).then(function (err) {
      reject(err)
    })
  })
}

export default {
  get: function (url, params) {
    return apiAxios('GET', url, params)
  },
  post: function (url, params) {
    return apiAxios('POST', url, params)
  },
  put: function (url, params) {
    return apiAxios('PUT', url, params)
  },
  delete: function (url, params) {
    return apiAxios('DELETE', url, params)
  }
}