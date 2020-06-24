<template>
  <div>
    <v-popup
      v-if="isInfo"
      @closePopup="closePopup"
      @addPopup="addPopup"
      popupRightBtn="add to cart"
      :popupTitile="product_data.name"
    >
      <img
        class="v-catalog-item__image"
        :src="require('../../assets/images/' + product_data.image)"
        alt="img"
      />
      <div>
        <p>{{ product_data.name }}</p>
        <p>Price: {{ product_data.price }}$</p>
        <p>Category: {{ product_data.category }}</p>
      </div>
    </v-popup>

    <div class="v-catalog-item">
      <img
        class="v-catalog-item__image"
        :src="require('../../assets/images/' + product_data.image)"
        alt="img"
      />
      <p>{{ product_data.name }}</p>
      <p>Price: {{ product_data.price }}$</p>
      <button class="btn" @click="showPopupInfo">show info</button>
      <button class="btn" @click="addToCart">add to cart</button>
    </div>
  </div>
</template>

<script>
import vPopup from '../popup/v-popup'
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
  data() {
    return {
      isInfo: false,
    }
  },
  methods: {
    addToCart() {
      this.$emit('addToCart', this.product_data)
    },
    closePopup() {
      this.isInfo = false
    },
    showPopupInfo() {
      this.isInfo = true
    },
    addPopup() {
      this.addToCart()
    },
  },
  components: {
    vPopup,
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
