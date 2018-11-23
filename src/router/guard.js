import store from '../store'

export default function Guard (to, from, next) {
  if (store.getters.user) {
    next()
  } else {
    next('./login?loginError=true')
  }
}
