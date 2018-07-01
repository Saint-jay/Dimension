import { RequestMethod } from '../utils/api-util.js';
import axios from 'axios';
import QS from 'qs';

export default class BaseApi {
    constructor(args) {
    }
    baseUrl = '';
    resource = '';
    /**
   * 创建访问令牌
   * @param {string} url 请求地址
   * @param {Object} data 请求参数
   * @param {string} method  http请求方式
   * @param {boolean} cache 是否启用缓存
   * @param {string} responseType 响应类型
   * @return {Object} 访问令牌
   */
    createRpcToken(url, data, method) {
        data = data || {};
        method = method || RequestMethod.GET;
        if (method.toLowerCase() === 'get') {
            let params = '';
            Object.keys(data).forEach(
                function (key) {
                    if (data[key] || data[key] === 0) {
                        params += key + '=' + data[key] + '&';
                    }
                }
            );
            if (params.length > 0) {
                params = params.substr(0, params.length - 1);
                url += '?' + params;
                data = {};
            }
        } else {
            if (isFormData) {
                data = QS.stringify(data);
            }
        }

        let instance = axios.create();
        // instance.defaults.headers.common['Authorization'] = token;
        instance.defaults.headers.common['Cache-Control'] = 'no-cache';
        return instance(
            {
                url: url,
                method: method,
                data: data,
                withCredentials: true,
                validateStatus: function (status) {
                    return status >= 200 && status < 600; // default
                },
            }
        );
    }
}