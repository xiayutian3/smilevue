import Vue from 'vue'
import axios from 'axios'




// // 环境的切换
// if (process.env.NODE_ENV == 'development') {    
//   axios.defaults.baseURL = '/api';
// } else if (process.env.NODE_ENV == 'debug') {    
//   axios.defaults.baseURL = '';
// } else if (process.env.NODE_ENV == 'production') {    
//   axios.defaults.baseURL = 'http://api.123dailu.com/';
// }

// 创建axios实例
const service = axios.create({
  baseURL: process.env.API_ROOT, // api的base_url
  timeout: 5000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
  // Do something before request is sent
  // if (store.getters.token) {
  //   config.headers['X-Token'] = localStorage.getItem("token") // 让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改，一般项目中多是从store中获取，这里只是写的基本例子。
  // }

//  console.log('config',config)

//全局loading的添加
// Vue.prototype.$dyLoading.open({text:'显示loading'})
Vue.prototype.$dyLoading.open()



  return config
}, error => {
  // Do something with request error

  // Vue.prototype.$dyLoading({content:'我是全局loading',show:false})

  console.log(error) // for debug
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
    // console.log('response',response)
    Vue.prototype.$dyLoading.close({text:'显示loading'})

    return response
  },
  //此处根据返回的状态code进行具体的判断，代码省略
  error => {
    console.log('err' + error)// for debug

    // Vue.prototype.$dyLoading({content:'我是全局loading',show:false})

    return Promise.reject(error)
  })

export default service