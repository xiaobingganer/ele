import axios from "axios";
import router from '@/router'


const instance = axios.create({
  // baseURL: 'http://39.99.244.210:8001',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'Authorization': "Bearer" + " " + localStorage.token
  }
})


instance.interceptors.request.use(
  (config) => {
    // const token = localStorage.token
    // if (token) {
    //   config.headers.common['Authorization'] = "Bearer" + " " + token
    // }
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)
instance.interceptors.response.use(
  (response) => {
    console.log(response.data)
    return response.data
  },
  (error) => {

    if (error.response) {
      if (error.response.status == 401) {
        router.replace({
          path: '/login',
        })
      }
      // 返回接口返回的错误信息
      return
    }
  }
)


export default instance


// export default {
//   get(url, params = {}, headers = {}) {
//     return new Promise((resolve, reject) => {
//       instance.get(url, {
//         params,
//         headers
//       }).then((response) => {
//         resolve(response.data)
//       }, (err) => {
//         reject(err)
//       })
//     })
//   },

//   post(url, data = {}, options) {
//     return instance.post(url, data, options)
//   },
// }




// 封装一个get方法 ********
/* export const get = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    instance.get(url, {
      params
    }).then(res => {
      resolve(res)
    }, err => {
      reject(err)
    })
  })

} */


export const get = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    instance.get(url, {
      params
    }).then(res => {
      resolve(res)
    }, err => {
      reject(err)
    })
  })
}




export const get1 = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    instance.get(url, {
      params
    }).then(res => {
      resolve(res)
    }, err => {
      reject(err)
    })
  })
}




export const post = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    instance.post(url, data).then(res => {
      resolve(res)
    }, err => {
      reject(err)
    })
  })
}