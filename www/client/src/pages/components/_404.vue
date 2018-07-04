<template>
    <div>
        <img v-lazy="img" alt="404">
    </div>
</template>

<script>
export default {
  data() {
    return {
      img: require('../../assets/img/404.png')
    };
  },
  mounted() {}
};
</script>

<style lang="less" scoped>
div {
  text-align: center;
  padding: 250px 0 150px;
  img {
    width: 500px;
  }
}
</style>
