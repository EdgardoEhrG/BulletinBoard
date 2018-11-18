export default {
  state: {
    ads: [
        {title: 'Coca-Cola', description: 'Beverage', promo: true, imgSrc: 'https://www.themanufacturer.com/wp-content/uploads/2013/03/Coke-Be-Ok-Still-04.jpg', id: 1},
        {title: 'KFC', description: 'Food', promo: true, imgSrc: 'https://cdn.fabrik.io/images/y1g/4ebb46ef02004624.jpg?maxwidth=1280&amp;maxheight=1280&amp;v=1', id: 2},
        {title: 'Chanel', description: 'Perfume', promo: true, imgSrc: 'https://3.bp.blogspot.com/-P8mloDIxlnQ/UqMOwgrxlDI/AAAAAAAAMLM/9SkFxIcyO_g/s1600/coco+by+chanel+eau+de+parfum+original+80s+perfume+fragrance+perfumeshrine.com.jpg', id: 3},
        {title: 'Starbucks', description: 'Coffee', promo: true, imgSrc: 'https://cdn.wallpapersafari.com/86/39/JZSio4.jpg', id: 4},
        {title: 'Gillette', description: 'Shaving product', promo: true, imgSrc: 'https://jknowles.com/wp-content/uploads/2017/01/JK_Gillette3-1.jpg', id: 5}
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    ads (state) {
      return state.ads
    },
    promoAds (state) {
      return state.ads.filter(ad => {
        return ad.promo === true
      })
    },
    myAds (state) {
      return state.ads
    }
  }
}
