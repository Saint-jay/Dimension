<template>
  <div>
    <r-header/>
    <nuxt/>
    <r-footer/>
  </div>
</template>

<script>
import RHeader from '~/components/pages/_header.vue'
import RFooter from '~/components/pages/_footer.vue'
export default {
  components: {
    RHeader, RFooter
  }
}
</script>
