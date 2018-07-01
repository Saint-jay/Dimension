/**
 * @description api工具类
 */

/**
 * @desc  请求方式集合
*/
 class RequestMethod {
    static OPTIONS = 'OPTIONS';
    static GET = 'GET';
    static HEAD = 'HEAD';
    static POST = 'POST';
    static PUT = 'PUT';
    static DELETE = 'DELETE';
    static PATCH = 'PATCH';
    static TRACE = 'TRACE';
    static CONNECT = 'CONNECT';
}



/**
 * @desc  Api 工具
*/
class ApiUtil {

	constructor () {
        throw new Error('Cannot initialize this class.');
  	}

    static responseHandler (token) {
        return new Promise( (resolve, reject) => {
            token.then( (response) =>{
                resolve(response.data);
            }).catch( err => {
                reject(err);
            });
        });
  	}
};


export {RequestMethod, ApiUtil}


