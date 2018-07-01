/**
 * @Author    zhaoshengjie
 * @created   2017-01-12
 */

export default class Util{
    constructor(){
        throw new Error('Cannot initialize this class.');
    }
    
    // 处理时间格式
    static date (d, fmt) {
        let date = new Date(d);
        if (/(y+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
        }
        let o = {
            'M+': date.getMonth() + 1,
            'd+': date.getDate(),
            'h+': date.getHours(),
            'm+': date.getMinutes(),
            's+': date.getSeconds()
        }
        for (let k in o) {
            if (new RegExp(`(${k})`).test(fmt)) {
                let str = o[k] + ''
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : this.padLeftZero(str))
            }
        }
        return fmt
    }
    static padLeftZero (str) {
        return ('00' + str).substr(str.length)
    }
    
    // 深拷贝
    static copyDeep (msg) {
       let arr = [], obj = {},i,key;
       if(msg instanceof Array){
           if(msg.length){
               for(i=0;i<msg.length;i++){
                   arr[i] = this.copyDeep(msg[i]);
               }
           }
           return arr;
       } else if(msg instanceof Object){
           for(key in msg){
               obj[key] = this.copyDeep(msg[key]);
           }
           return obj;
       } else if(typeof msg ==='string'){
           return msg;
       } else {
           return msg;
       }
    }
    
    // 判断数据是否包含某元素
    static arrContains (arr,item,key) {
      for (let i of arr) {
        if(key){
          if (i[key] === item[key]){
            return true;
          }
        }else{
          if (i === item){
            return true;
          }
        }
      }
      return false;
    }
    
    // 获取节点样式
    static getStyle (node,attr) {
      if(typeof getComputedStyle != 'undefined'){
          var value = getComputedStyle(node,null).getPropertyValue(attr);
          return attr == 'opacity' ? value * 100 : value; //兼容不透明度，如果是不透明度，则返回整数方便计算
      }else if(typeof node.currentStyle != 'undefined'){
          if(attr == 'opacity'){ //兼容不透明度
              return Number(node.currentStyle.getAttribute('filter').match(/(?:opacity[=:])(\d+)/)[1]);
          }else{
              return node.currentStyle.getAttribute(attr);
          }
      }
    }
    
    // 判断对象是否有值
    static isHaveKeyObject (obj) {
      if(!obj){
        return false;
      }
      for(let key in obj){
        return true;
      }
      return false;
    }

    // 设置页面title
    static setTitle (title) {
        document.title = title
        let $iframe = window.$('<iframe src="/favicon.ico" style="opacity:0;"></iframe>').on('load', () => {
            setTimeout(() => {
            $iframe.off('load').remove()
            }, 0)
        }).appendTo(window.$('body'))
    }

}