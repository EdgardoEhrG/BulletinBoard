<template lang="pug">
    div
        v-container(fluid)
            v-layout(row)
                v-flex(xs12)
                    v-carousel
                        v-carousel-item(v-for="ad in promoAds" :key="ad.id" :src="ad.imgSrc")
                            div.carousel-link
                                v-btn.error(:to="'/ad/' + ad.id") Buy
        v-container(grid-list-lg)
            v-layout(row wrap)
                v-flex(xs12 md4 sm6  v-for="ad in ads" :key="ad.id")
                    v-card
                        v-img(:src="ad.imgSrc" height="200px")
                        v-card-title(primary-title)
                            div
                                h3(class="headline mb-0") {{ ad.title }}
                                div {{ ad.description }}
                        v-card-actions
                            v-spacer
                            v-btn(flat :to="'/ad/' + ad.id") Open
                            v-btn(raised dark) Buy
</template>

<script>
export default {
  name: 'home',
  computed: {
    promoAds () {
      return this.$store.getters.promoAds
    },
    ads () {
      return this.$store.getters.ads
    }
  }
}
</script>

<style lang="scss" scoped>

.carousel-link {
    position: absolute;
    bottom: 50px;
    left: 50%;

    padding: 5px 15px;

    border-top-left-radius: 5px;
    border-top-right-radius: 5px;

    background-color: rgba(0, 0, 0, .5);

    transform: translate(-50%, 0);
}

</style>


