<template lang="pug">
    div
        v-container(fluid)
            v-layout(row)
                v-flex(xs12)
                    v-carousel
                        v-carousel-item(v-for="ad in ads" :key="ad.id" :src="ad.imgSrc")
                            div.carousel-link
                                v-btn.error(:to="'/ad/' + ad.id") Buy
        v-container(grid-list-lg)
            v-layout(row wrap)
                v-flex(xs12 md4 sm6  v-for="ad in ads" :key="ad.id")
                    v-card
                        v-card-media(:src="ad.imgSrc" height="200px")
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
  data () {
    return {
      ads: [
          {title: 'Coca-Cola', description: 'Beverage', promo: true, imgSrc: 'https://www.themanufacturer.com/wp-content/uploads/2013/03/Coke-Be-Ok-Still-04.jpg', id: 1},
          {title: 'KFC', description: 'Food', promo: true, imgSrc: 'https://cdn.fabrik.io/images/y1g/4ebb46ef02004624.jpg?maxwidth=1280&amp;maxheight=1280&amp;v=1', id: 2},
          {title: 'Chanel', description: 'Perfume', promo: true, imgSrc: 'https://3.bp.blogspot.com/-P8mloDIxlnQ/UqMOwgrxlDI/AAAAAAAAMLM/9SkFxIcyO_g/s1600/coco+by+chanel+eau+de+parfum+original+80s+perfume+fragrance+perfumeshrine.com.jpg', id: 3},
          {title: 'Starbucks', description: 'Coffee', promo: true, imgSrc: 'https://cdn.wallpapersafari.com/86/39/JZSio4.jpg', id: 4},
          {title: 'Gillette', description: 'Shaving product', promo: true, imgSrc: 'https://jknowles.com/wp-content/uploads/2017/01/JK_Gillette3-1.jpg', id: 5}
      ]
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


