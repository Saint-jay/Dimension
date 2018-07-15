<template>
    <div>
        <img v-lazy="img" alt="">
    </div>
</template>

<script>
export default {
  props: ["error"],
  data() {
    return {
      img: require("../static/img/404.png")
    };
  },
  mounted () {
    this.$store.commit('options/SET_ERROR_PAGE', true)
  },

  beforeDestroy () {
    this.$store.commit('options/SET_ERROR_PAGE', false)
  }
};
</script>

<style lang="scss" scoped>
div {
  text-align: center;
  padding: 250px 0 150px;
  img {
    width: 500px;
  }
}
</style>
