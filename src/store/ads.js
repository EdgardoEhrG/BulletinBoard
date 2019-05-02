import * as fb from 'firebase'

class Ad {
  construtor (title, description, ownerId, imgSrc = '', promo = false, id = null) {
    this.title = title
    this.description = description
    this.ownerId = ownerId
    this.imgSrc = imgSrc
    this.promo = promo
    this.id = id
  }
}

export default {
  state: {
    ads: [
        {title: 'Coca-Cola', description: 'Beverage', promo: true, imgSrc: 'https://www.themanufacturer.com/wp-content/uploads/2013/03/Coke-Be-Ok-Still-04.jpg', id: 1},
        {title: 'KFC', description: 'Food', promo: true, imgSrc: 'https://cdn.fabrik.io/images/y1g/4ebb46ef02004624.jpg?maxwidth=1280&amp;maxheight=1280&amp;v=1', id: 2},
        {title: 'Chanel', description: 'Perfume', promo: true, imgSrc: 'https://yakymour.files.wordpress.com/2015/05/coconoir_collection.jpg', id: 3},
        {title: 'Starbucks', description: 'Coffee', promo: true, imgSrc: 'https://cdn.wallpapersafari.com/86/39/JZSio4.jpg', id: 4},
        {title: 'Gillette', description: 'Shaving product', promo: true, imgSrc: 'https://jknowles.com/wp-content/uploads/2017/01/JK_Gillette3-1.jpg', id: 5}
    ]
  },

  mutations: {
    createAd (state, payload) {
      state.ads.push(payload)
    },
    loadAds (state, payload) {
      state.ads = payload
    }
  },

  actions: {
    async toCreateAd ({commit, getters}, { title, description, imgSrc, promo }) {
      commit('clearError')
      commit('setLoading', true)
      try {
        const ad = new Ad(
          title,
          description,
          getters.user.id,
          imgSrc,
          promo
        )
        const fbVal = await fb.database().ref('ads').push(ad)
        commit('setLoading', false)
        commit('createAd', { title, description, imgSrc, promo, id: fbVal.key })
      } catch (error) {
        commit('setError', error.message)
        commit('setLoading', false)
        throw error
      }
    },
    async toFetchAds ({commit}) {
      commit('clearError')
      commit('setLoading', true)
      const resAds = []
      try {
        const fbGettinVal = await fb.database().ref('ads').once('value')
        const ads = fbGettinVal.val()
        Object.keys(ads).forEach(key => {
          const ad = ads[key]
          const { title, description, ownerId, imgSrc, promo } = ad
          resAds.push(new Ad(title, description, ownerId, imgSrc, promo, key))
        })
        commit('loadAds', resAds)
        commit('setLoading', false)
      } catch (error) {
        commit('setError', error.message)
        commit('setLoading', false)
        throw error
      }
    }
  },

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
    },
    adById (state) {
      return adId => {
        return state.ads.find(ad => ad.id === adId)
      }
    }
  }
}
