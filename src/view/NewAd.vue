<template lang="pug">
    v-container
        v-layout(row)
            v-flex(xs12 sm6 offset-sm3)
                h1(class="text--secondary mb-3") Create New Ad
                v-form.mb-3(v-model="valid" ref="form" validation)
                            v-text-field(
                                prepend-icon="shop"
                                name="title"
                                label="Ad title"
                                type="text"
                                v-model="title"
                                :rules="[v => !!v || 'Title is required']"
                                required
                                )
                            v-text-field(
                                prepend-icon="description"
                                name="description"
                                label="Ad description"
                                type="text"
                                v-model="description"
                                :rules="[v => !!v || 'Description is required']"
                                multi-line
                                required
                                )
                v-layout.mb-3(row)
                    v-flex(xs12)
                        v-btn.warning Upload #[v-icon(right dark) cloud_upload]
                v-layout(row)
                    v-flex(xs12)
                        // img(height="100px")
                v-layout.mb-3(row)
                    v-flex(xs12)
                        v-switch(v-model="promo" label="Add to promo" color="indigo")
                v-layout.mb-3(row)
                    v-flex(xs12)
                        v-spacer
                        v-btn.success(@click="createAd" :disabled="!valid") Create Ad
</template>

<script>
export default {
  name: 'new-ad',
  data () {
    return {
      title: '',
      description: '',
      promo: false,
      valid: false
    }
  },
  methods: {
    createAd () {
      if (this.$refs.form.validate()) {
        const ad = {
          title: this.title,
          description: this.description,
          promo: this.promo
        }
        console.log(ad)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>


