<template>
  <div class="v-cart">
    <router-link :to="{ name: 'catalog' }">
      <div class="v-catalog__link-to-cart">Back to catalog</div>
    </router-link>
    <h1>Cart</h1>
    <p v-if="!cart_data.length">There are no products in cart...</p>
    <CartItem
      v-else
      v-for="(item, index) in cart_data"
      :key="item.article"
      :cart_item_data="item"
      @deleteFromCart="deleteFromCart(index)"
      @increment="increment(index)"
      @decrement="decrement(index)"
    />
    <div class="v-cart__total">
      <p class="v-cart__total-title">Total:</p>
      <p>${{ cartTotalCost }}</p>
    </div>
  </div>
</template>

<script>
import CartItem from "./v-cart-item"
import { mapActions } from "vuex"
export default {
  name: "v-cart",
  props: {
    cart_data: {
      type: Array,
      default() {
        return []
      },
    },
  },
  components: { CartItem },
  computed: {
    cartTotalCost() {
      let result = []
      if (this.cart_data.length) {
        for (let item of this.cart_data) {
          result.push(item.price * item.quantity)
        }
        result = result.reduce((sum, el) => {
          return sum + el
        })
      } else return 0

      return result
    },
  },
  methods: {
    ...mapActions([
      "DELETE_FROM_CART",
      "INCREMENT_CART_ITEM",
      "DECREMENT_CART_ITEM",
    ]),
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index)
    },
    increment(index) {
      this.INCREMENT_CART_ITEM(index)
    },
    decrement(index) {
      this.DECREMENT_CART_ITEM(index)
    },
  },
}
</script>

<style lang="scss">
.v-cart {
  margin-bottom: 100px;
  &__total {
    position: fixed;
    right: 0;
    left: 0;
    bottom: 0;
    padding: $padding * 2 $padding * 3;
    display: flex;
    justify-content: center;
    background: $green;
    color: #ffff;
  }
  &__total-title {
    margin-right: $margin * 2;
  }
}
</style>
