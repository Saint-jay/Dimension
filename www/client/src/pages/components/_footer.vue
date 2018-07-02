<template>
    <footer>
    <p>
        <a href="https://github.com/Saint-jay" style="opacity: .7;">
            <Icon type="social-github" size="40"></Icon>
        </a>
    </p>
    
    <p>Copyright © 2016-{{ new Date().getFullYear() }} <a href="javascript:;">秋水儿</a> All Rights Reserved. 
        | 
        <a href="http://www.miitbeian.gov.cn/"  target="_blank" rel="nofollow noopener noreferrer">京ICP备17040709号-1</a>
    </p>
    </footer>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  created() {

  },
  methods: {

  }
};
</script>

<style lang="less" scoped>
@import "../../assets/less/components/_footer.less";
</style>
