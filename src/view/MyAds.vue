<template lang="pug">
    v-container
        v-layout(row)
            v-flex(xs12 sm6 offset-sm3)
                h1(class="text-secondary mb-3") My Ads
                v-card(class="elecation-10 mb-4" v-for="ad in ads" :key="ad.id")
                    v-layout(row)
                        v-flex(xs4)
                            v-card-media(:src="ad.imgSrc" height="160px")
                        v-flex(xs8)
                            v-card-text
                                h2.text-primary {{ ad.title }}
                                p {{  ad.description }}
                            v-card-actions
                                v-spacer
                                v-btn.info(:to="'/ad/' + ad.id") Open
</template>

<script>
export default {
  name: 'my-ads',
  data () {
    return {
      ads: [
        {title: 'Coca-Cola', description: 'Beverage', promo: true, imgSrc: 'https://www.themanufacturer.com/wp-content/uploads/2013/03/Coke-Be-Ok-Still-04.jpg', id: 1}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>


