// import instance from './index'
// import {
//   get,
//   post
// } from './index'


import instance, {
  get,
  post
} from './index'


const baseURL = 'http://39.99.244.210:8001'






//使用instance实例封装方法--------
export function getNum(params) {
  return instance({
    method: 'get',
    url: baseURL + "/icvdb/content/getEcologyNum",
    params
  })
}

export function A(params) {
  return instance({
    mothod: 'get',
    url: '',
    params
  })
}

export function B(data) {
  return instance({
    method: 'post',
    url: '',
    data

  })
}


//使用封装的get方法********
export function getNum2(params) {
  return get(`${baseURL}/icvdb/content/getEcologyNum`, params)
};




export const getNum3 = async (params) => await get(`${baseURL}/icvdb/content/getEcologyNum`, params);

export const H = async (data) => await post(`${baseURL}/icvdb/content/getEcologyNum`, data)


export function getChecks(params) {
  return instance({
    method: 'get',
    url: baseURL + "/icvdb/content/getContentLabel",
    params
  })

}




// export const getNum = async (model) => {
//   let result = await instance.get(
//     "/icvdb/content/getEcologyNum", {
//       model: model
//     }, {
//       Authorization: "Bearer" + " " + localStorage.token
//     }
//   )
//   console.log(111, result);
//   return result
// }



export const a = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1)
    }, 2000)
  })
}



export function b(params) {
  return get(``, {
    params
  })
}

export function c(data) {
  return post(``, data)
}




export function D(params) {
  return instance({
    method: 'get',
    url: '',
    params
  })
}


export function E(data) {
  return instance({
    method: 'post',
    url: '',
    data
  })
}




export function F(params) {
  return get(``, params)
}

export function G(data) {
  return post(`${baseURL}/icvdb/content/getEcologyNum`, data)
}