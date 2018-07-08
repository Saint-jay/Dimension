<template>
    <section>
        <div class="article">

            <div class="article-layout">
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
                <h2 class="article-title">{{ details.title }}</h2>
                <!-- 作者 and 时间 -->
                <p class="article-au-time">
                    <i class="fa fa-user-o">
                        <time>{{ details.author }}</time>
                    </i>
                    <i class="el-icon-time">
                        <time>{{ details.updated_at }}</time>
                    </i>
                </p>
                
                
                <!-- md -->
                <div class="article-md" v-html="contentMD">
                </div>


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
import marked from "marked";
import hljs from "highlight.js";

let renderMD = new marked.Renderer();
marked.setOptions({
  renderer: renderMD,
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  highlight: function(code, lang) {
    if (lang && hljs.getLanguage(lang)) {
      return hljs.highlight(lang, code, true).value;
    } else {
      return hljs.highlightAuto(code).value;
    }
  }
});
export default {
  data() {
    return {
      cd: this.$route.params.id
    };
  },
  computed: {
    contentMD() {
      return marked(this.$store.state.article.details.body_md, { sanitize: true });
    },
    details() {
        return this.$store.state.article.details
    }
  },
  created() {
    this.$store.commit("option/SET_HAS_SHOW", false);
    this.$store.dispatch('getArt', this.cd)
  }
};
</script>







