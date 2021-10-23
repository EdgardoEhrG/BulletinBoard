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
                            v-textarea(
                                prepend-icon="description"
                                name="description"
                                label="Ad description"
                                type="text"
                                v-model="description"
                                :rules="[v => !!v || 'Description is required']"
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
                        v-btn.success(@click="createAd" :disabled="!valid || loading" :loading="loading") Create Ad
</template>

<script>
export default {
  name: "new-ad",
  data() {
    return {
      title: "",
      description: "",
      promo: false,
      valid: false,
    };
  },
  methods: {
    createAd() {
      if (this.$refs.form.validate()) {
        const newAd = {
          title: this.title,
          description: this.description,
          promo: this.promo,
          imgSrc:
            "https://cdn-images-1.medium.com/max/2000/1*nfvapd86apvGH-hNBYkYuw.png",
        };
        this.$store
          .dispatch("toCreateAd", newAd)
          .then(() => {
            this.$router.push("/my");
          })
          .catch(() => {});
      }
    },
  },
  computed: {
    loading() {
      return this.$store.getters.loading;
    },
  },
};
</script>

<style lang="scss" scoped></style>
