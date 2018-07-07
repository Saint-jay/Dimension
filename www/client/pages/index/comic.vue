<template>
  <section>
        comic
  </section>
  
</template>

<script>
export default {
  created() {
    this.$store.commit('option/SET_HAS_SHOW', true)
  }
}
</script>

