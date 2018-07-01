import AxiosApi from './axios-api.js';
import {RequestMethod} from '../utils/api-util';
export default class CommonApi extends AxiosApi {
  constructor() {
    super();
    this.baseUrl += '/api';
    this.resource = '/user_info';
  }

  /**
   * @Author    
   * @DateTime  
   * @param     {Object} data  渠道编码
   * @return    {Object} 响应体
   */
  getUser (data) {
    return this.createRpcToken(
       this.baseUrl + this.resource,
       data,RequestMethod.GET
      );
  };
  
}