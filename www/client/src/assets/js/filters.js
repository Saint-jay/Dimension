import Vue from 'vue';
import Util from './utils/util.js';

Vue.filter('date', function (date, fmt) {
  if(!date){
    return '';
  }
  return  Util.date(date,fmt);
});
Vue.filter('number', function (num, len) {
  if(!num&&num+''!=='0'||num==='NaN'){
    return '';
  }
  let n = Math.pow(10,len);
  return Math.round(num * n) / n;
});


