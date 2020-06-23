<template>
  <div class="v-catalog-item">
    <img
      class="v-catalog-item__image"
      :src="require('../../assets/images/' + product_data.image)"
      alt="img"
    />
    <p>{{ product_data.name }}</p>
    <p>Price: {{ product_data.price }}$</p>
    <button class="btn" @click="addToCart">add to cart</button>
  </div>
</template>

<script>
export default {
  name: 'v-catalog-item',
  props: {
    product_data: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  methods: {
    addToCart() {
      this.$emit('addToCart', this.product_data)
    },
  },
}
</script>

<style lang="scss">
.v-catalog-item {
  flex-basis: 25%;
  box-shadow: 0 0 8px 0 $grey;
  padding: $padding * 2;
  margin-bottom: $margin * 2;
  &__image {
    height: 100px;
    width: 100px;
  }
}
</style>
