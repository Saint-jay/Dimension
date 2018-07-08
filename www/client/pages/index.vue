<template>
  <div>
    <four-zero-four v-show="hasShow" />
    <nuxt/>
  </div>
  
</template>

<script>
import FourZeroFour from '~/components/pages/_404';
export default {
  layout: 'default',
  components: {
    FourZeroFour
  },
  computed: {
    hasShow () {
      return this.$store.state.option.hasShow
    }
  }
}
</script>

