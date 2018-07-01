import Vue from 'vue';
//  获取焦点指令
Vue.directive('focus', {
  update: function (el,bind) {
    if(bind.value){
        el.focus();
    }else{
        el.blur();
    }
    
  }
})