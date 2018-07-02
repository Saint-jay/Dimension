<template>
    <header>
      <div class="nav-container clearfix">
        <div class="profile-avatar clearfix fl">
          <img class="fl" src="../../assets/img/avatar_min.png" alt="">
          <!-- <img class="fl" src="http://cdn.zsjfish.com/5105ded6afea8.min.jpg" alt=""> -->
          <div class="avatar-info fl">
            <h3>{{userInfo.user.name}}</h3>
            <p>{{userInfo.user.describe}}</p>
          </div>
        </div>
        <nav class="clearfix fl">
          <a class="fl" :class="{'active': index == navIndex}" v-for="(nav, index) in userInfo.navList" :key="index" href="javascript:;" @click="changeUrl(index, nav)">{{ nav.name }}</a>
        </nav>
      </div>
    </header>
</template>

<script>
import CommonApi from "@/assets/js/apis/common-api.js";
let commonApi = new CommonApi();
export default {
  data() {
    return {
      navIndex: "",
    };
  },
  computed: {
    userInfo () {
      return this.$store.state.userInfo
    }
  },
  created() {
    this.getUser();
    // console.log("请在邮件中注明%c来自:console", "color:red;font-weight:bold;");
  },
  methods: {
    getUser () {
      this.$apiUtil.responseHandler(commonApi.getUser())
      .then( suc => {
        this.$store.state.userInfo = suc.result;
        this.changeUrl(0,  this.$store.state.userInfo.navList[0]);
      })
    },
    changeUrl (index, nav) {
      this.navIndex = index;
      this.$router.push(`${nav.url}`);
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../assets/less/components/_header.less";
</style>
