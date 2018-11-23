<template lang="pug">
    v-container
        v-layout(row)
            v-flex(xs12)
                v-card
                    v-img(
                        :src="ad.imgSrc"
                        height="300px"
                        )
                    v-card-text
                        h1.text--primary {{ ad.title }}
                        p {{ ad.description }}
                    v-card-actions
                        v-spacer
                        v-btn.warning(flat) Edit
                        v-btn.success Buy
</template>

<script>
export default {
  name: 'login',
  props: {
    id: {type: String, required: true}
  },
  computed: {
    ad () {
      const id = this.id
      return this.$store.getters.adById(id)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>


