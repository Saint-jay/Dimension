<template>
    <header>
      <div class="nav-container clearfix">
        <div class="profile-avatar clearfix fl">
          <img class="fl" v-lazy="ava" alt="">
          <div class="avatar-info fl">
            <h3>{{userInfo.user.name}}</h3>
            <p>{{userInfo.user.describe}}</p>
          </div>
        </div>
        <nav class="clearfix fl">
          <a class="fl" :class="{'active': index == navIndex}" 
                        v-for="(nav, index) in userInfo.navList" 
                        :key="index" 
                        href="javascript:;" 
                        @click="changeUrl(index, nav)"
          >{{ nav.type }}</a>
        </nav>
      </div>
    </header>
</template>

<script>
import '~/assets/scss/components/_header.scss';

export default {
  data() {
    return {
      ava: "http://cdn.zsjfish.com/5105ded6afea8.min.jpg",
      navIndex: ""
    };
  },
  computed: {
    userInfo () {
      return this.$store.state.user.data
    }
  },
  created() {
    this.userInfo.navList.forEach((el, i) => {
      if (this.$route.path === el.url) {
        this.changeUrl(i, el)
      }
    });
  },
  mounted() {
  },
  methods: {
    changeUrl(index, nav) {
      this.navIndex = index;
      this.$router.push(`${nav.url}`);
    }
  }
};
</script>

