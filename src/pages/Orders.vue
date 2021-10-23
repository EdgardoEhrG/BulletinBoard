<template lang="pug">
    v-container
        v-layout(row)
            v-flex(xs12 sm6 offset-sm3)
                h1(class="text--secondary mb-3") Orders
                v-list(two-line subheader dark)
                    v-list-tile(avatar v-for="order in orders" :key="order.id")
                        v-list-tile-action
                            v-checkbox(@change="markDone(order)" :input-value="order.done" color="success")
                        v-list-tile-content
                            v-list-tile-title {{ order.name }}
                            v-list-tile-sub-title {{ order.phone }}
                        v-list-tile-action
                            v-btn(light :to="'/ad/' + order.adID") Open
</template>

<script>
export default {
  name: "orders",
  data() {
    return {
      orders: [
        {
          id: 1,
          name: "User",
          phone: "x-xxx-xxx-xx-xx",
          adID: "1",
          done: false,
        },
      ],
    };
  },
  methods: {
    markDone(order) {
      order.done = true;
    },
  },
};
</script>

<style lang="scss" scoped></style>
