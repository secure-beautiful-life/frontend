import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

export const BASE_URL = 'https://8000.taewonkim.com/api'

const instanceSetting: AxiosRequestConfig = {
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
}

const axiosInstance: AxiosInstance = axios.create(instanceSetting)

const requestSuccess = (req: AxiosRequestConfig) => {
  const authToken = window.localStorage.getItem('access_token')
  if (!authToken) return req
  if (authToken && req.headers) req.headers.Authorization = `Bearer ${authToken}`
  return req
}
const requestError = (err: AxiosError) => {
  return Promise.reject(err)
}

const responseSuccess = (res: AxiosResponse) => {
  return res
}
// const responseError = (err: AxiosError) => {auth error일 때 처리 필요}

axiosInstance.interceptors.request.use(requestSuccess, requestError)
// axiosInstance.interceptors.response.use(responseSuccess, responseError)

export default axiosInstance
