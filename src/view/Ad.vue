<template lang="pug">
    v-container
        v-layout(row)
            v-flex(xs12)
                v-card
                    v-card-media(
                        src="https://jknowles.com/wp-content/uploads/2017/01/JK_Gillette3-1.jpg"
                        height="300px"
                        )
                    v-card-text
                        h1.text--primary Title
                        p Text
                    v-card-actions
                        v-spacer
                        v-btn.warning(flat) Edit
                        v-btn.success Buy
</template>

<script>
export default {
  name: 'login'
}
</script>

<style lang="scss" scoped>

</style>


