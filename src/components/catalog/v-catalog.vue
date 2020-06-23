<template>
  <div class="v-catalog">
    <router-link :to="{ name: 'cart', params: { cart_data: CART } }">
      <div class="v-catalog__link-to-cart">Cart: {{ CART.length }}</div>
    </router-link>
    <h1>Catalog</h1>
    <v-catalog-select
      :options="options"
      @select="sortByCategories"
      :selected="selected"
    />
    <div class="v-catalog__list">
      <v-catalog-item
        v-for="product in filterdrProduct"
        :key="product.article"
        :product_data="product"
        @addToCart="addToCart"
      />
    </div>
  </div>
</template>

<script>
import vCatalogItem from './v-catalog-item'
import vCatalogSelect from './v-catalog-select'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'v-catalog',
  components: { vCatalogItem, vCatalogSelect },
  data() {
    return {
      options: [
        { name: 'all', value: 1 },
        { name: 'woman', value: 2 },
        { name: 'man', value: 3 },
      ],
      selected: 'all',
      sortedProducts: [],
    }
  },
  computed: {
    ...mapGetters(['PRODUCTS', 'CART']),
    filterdrProduct() {
      if (this.sortedProducts.length) {
        return this.sortedProducts
      } else {
        return this.PRODUCTS
      }
    },
  },
  methods: {
    ...mapActions(['GET_PRODUCTS_FROM_API', 'ADD_TO_CART']),
    addToCart(data) {
      this.ADD_TO_CART(data)
    },
    sortByCategories(option) {
      this.selected = option.name
      this.sortedProducts = []
      this.PRODUCTS.map((item) => {
        if (item.category === option.name) {
          this.sortedProducts.push(item)
        }
      })
    },
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API()
  },
}
</script>

<style lang="scss">
.v-catalog {
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }
  &__link-to-cart {
    position: absolute;
    top: 10px;
    right: 10px;
    border: 1px solid $grey;
    padding: $padding * 2;
    border-radius: $radius;
  }
}
</style>
