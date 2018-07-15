<template>
    <section>
        <div class="body-layout">

            <div class="article-layout" v-loading="!details.cd">
                <!-- 面包屑 -->
                <div class="breadcrumb">
                    <el-breadcrumb separator-class="el-icon-arrow-right">
                        <el-breadcrumb-item :to="{ path: '/' }">
                            <i class="fa fa-home fa-fw fa-lg"></i>
                        </el-breadcrumb-item>
                        <el-breadcrumb-item v-if="details.tag">
                            <a href="javascript:;">{{ details.tag }}</a>
                        </el-breadcrumb-item>
                        <el-breadcrumb-item v-if="details.title">{{ details.title }}</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>


                <!-- title -->
                <h2 class="article-title" v-if="details.title">{{ details.title }}</h2>
                <!-- 作者 and 时间 -->
                <p class="article-au-time" v-if="details.author && details.updated_at">
                    <i class="fa fa-user-o">
                        <time>{{ details.author }}</time>
                    </i>
                    <i class="el-icon-time">
                        <time>{{ details.updated_at | date('yyyy-MM-dd hh:mm') }}</time>
                    </i>
                </p>
                <!-- md -->
                <div class="article-md markdown-body" v-html="contentMD"></div>
                

                <!-- 返回首页 -->
                <div class="article-end-back">
                    <i class="fa fa-home fa-2x">
                         <span>The end</span>
                    </i>
                </div>

            </div>

        </div>
    </section>
</template>

<script>
import "~/assets/scss/module/article.scss";
import markdown from '~/plugins/marked'
export default {
  data() {
    return {
      cd: this.$route.params.id
    };
  },
  computed: {
    contentMD() {
      return markdown(this.details.body_md, false, false).html
    },
    details() {
        return this.$store.state.article.details
    }
  },
  created() {
    this.$store.dispatch('getArt', this.cd)
  }
};
</script>







