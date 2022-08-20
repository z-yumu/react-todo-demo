import aixos from 'axios'



// index.ts
import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

class Request {
  // axios 实例
  instance: AxiosInstance
  // 基础配置，url和超时时间
  baseConfig: AxiosRequestConfig = {baseURL: "/api", timeout: 60000}

  constructor(config: AxiosRequestConfig) {
    // 使用axios.create创建axios实例
    this.instance = axios.create(Object.assign(this.baseConfig, config))
  }
  // 定义请求方法
  public request(config: AxiosRequestConfig):Promise<any> {
    return this.instance.request(config)
  }
}
export default Request