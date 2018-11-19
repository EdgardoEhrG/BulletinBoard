<template lang="pug">
    v-container(fluid fill-height)
        v-layout(align-center justify-center)
            v-flex(xs12 sm8 md6)
                v-card.elevation-12
                    v-toolbar(dark)
                        v-toolbar-title Login form
                    v-card-text
                        v-form(v-model="valid" ref="form" lazy-validation)
                            v-text-field(
                                prepend-icon="person"
                                name="email"
                                label="Email"
                                type="email"
                                v-model="email"
                                :rules="emailRules"
                                required
                                )
                            v-text-field(
                                prepend-icon="lock"
                                name="password"
                                label="Password"
                                type="password"
                                v-model="password"
                                :counter="6"
                                :rules="passwordRules"
                                required
                                )
                    v-card-actions
                        v-spacer
                        v-btn(
                          @click="onSubmit"
                          :dark="valid"
                          :disabled="!valid || loading"
                          :loading="loading"
                          ) Login
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: '',
      valid: false,
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => v.length >= 6 || 'Password must be equal or more than 6 characters'
      ]
    }
  },
  methods: {
    onSubmit () {
      if (this.$refs.form.validate()) {
        const user = {
          email: this.email,
          password: this.password
        }
        this.$store.dispatch('toLoginUser', user)
          .then(() => this.$router.push('/'))
          .catch(err => console.error(err))
      }
    }
  },
  computed: {
    loading () {
      return this.$store.getters.loading
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
