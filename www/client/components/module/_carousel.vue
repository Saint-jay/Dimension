<template>
    <div>
        <el-carousel :trigger="option.trigger" :height="option.height" :type="option.type">
            <el-carousel-item v-for="item in 4" :key="item">
                <h3>{{ item }}</h3>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
export default {
  props: {
    option: {
      type: Object,
      default() {
        return {
          type: "",
          trigger: "click",
          height: "220px"
        };
      }
    }
  },
  data() {
    return {};
  },
  computed: {},
  created() {}
};
</script>

<style lang="scss" scoped>
.el-carousel {
  border-radius: 4px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>








