import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

const BASE_URL = ''

const instanceSetting: AxiosRequestConfig = {
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
}

const axiosInstance: AxiosInstance = axios.create(instanceSetting)

const requestSuccess = () => {}
const requestError = () => {}

const responseSuccess = () => {}
const responseError = () => {}

axiosInstance.interceptors.request.use(requestSuccess, requestError)
axiosInstance.interceptors.response.use(responseSuccess, responseError)

export default axiosInstance
