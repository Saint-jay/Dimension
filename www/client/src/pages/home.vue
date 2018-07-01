<template>
  <div>
      <router-header/>
      <router-view v-show="!$store.state.zeroShow" />
      <four-zero-four v-show="$store.state.zeroShow" />
      <router-footer/>
  </div>
</template>

<script>
import RouterHeader from './components/_header';
import RouterFooter from './components/_footer';
import FourZeroFour from './components/_404';
export default {
  components: { RouterHeader, RouterFooter, FourZeroFour },
  data () {
    return {
    }
  },
  watch: {
    $route () {
      this.$store.state.zeroShow = false
    }
  }
}
</script>

