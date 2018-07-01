<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created () {
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  @import 'iview/dist/styles/iview.css';
</style>

<style lang="less">
  @import './assets/less/base/reset.less';
  @import './assets/less/common/section.less';
</style>


