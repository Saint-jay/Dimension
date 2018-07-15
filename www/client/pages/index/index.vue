<template>
<section>

  <div class="body-layout">
    <div class="clearfix">
      <div class="main-carousel fl">
        <r-carousel />
      </div>

      <div class="main-cards fl clearfix">
        <div class="fl" v-for="(item, index) in 6" :key="index">
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <div class="card-img" :style="`background-image: url('${img}');`"></div>
            <div class="card-mark"><span>好吃的汉堡</span></div>
          </el-card>
        </div>
      </div>
    </div>


    
  </div>

</section>
</template>

<script>
import RCarousel from "~/components/module/_carousel.vue";
export default {
  data() {
    return {
      img: require('../../static/img/404.png')
    }
  },
  components: { RCarousel },
  created() {}
};
</script>

