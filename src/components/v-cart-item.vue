<template>
  <div class="v-cart-item">
    <img
      class="v-cart-item__image"
      :src="require('../assets/images/' + cart_item_data.image)"
      alt="img"
    />
    <div class="v-cart-item__info">
      <p>Name: {{ cart_item_data.name }}</p>
      <p>Price: {{ cart_item_data.price }}</p>
      <p>Article: {{ cart_item_data.article }}</p>
    </div>
    <div class="v-cart-item__quantity">
      <p>qty:</p>
      <span>
        <span @click="decrementItem" class="quantity-btn">-</span>
        {{ cart_item_data.quantity }}
        <span @click="incrementItem" class="quantity-btn">+</span>
      </span>
    </div>
    <button class="btn" @click="deleteFromCart">Delete</button>
  </div>
</template>
<script>
export default {
  name: "CartItem",
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  mounted() {
    this.$set(this.cart_item_data, "quantity", 1)
  },
  methods: {
    deleteFromCart() {
      this.$emit("deleteFromCart")
    },
    decrementItem() {
      this.$emit("decrement")
    },
    incrementItem() {
      this.$emit("increment")
    },
  },
}
</script>

<style lang="scss">
.v-cart-item {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding: $padding * 2;
  margin-bottom: $margin * 2;

  &__image {
    width: 75px;
  }
  .quantity-btn {
    cursor: pointer;
  }
}
</style>
