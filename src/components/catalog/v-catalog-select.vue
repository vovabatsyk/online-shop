<template>
  <div class="v-select">
    <p class="v-select__title" @click="areOptionVisible = !areOptionVisible">
      {{ selected }}
    </p>
    <div class="v-select__option" v-show="areOptionVisible">
      <p
        v-for="option in options"
        :key="option.value"
        @click="selectOption(option)"
      >
        {{ option.name }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-catalog-select',
  props: {
    options: {
      type: Array,
      default() {
        return []
      },
    },
    selected: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      areOptionVisible: false,
    }
  },
  methods: {
    selectOption(option) {
      this.$emit('select', option)
      this.areOptionVisible = false
    },
  },
}
</script>

<style lang="scss">
.v-select {
  position: relative;
  width: 150px;
  cursor: pointer;
  margin: $padding * 3;
  p {
    margin: 0;
  }
  &__option {
    box-shadow: 0 0 8px 0 $grey;
    position: absolute;
    top: 40px;
    right: 0;
    width: 100%;
    background: #ffff;
    border-radius: $radius;
  }
  &__option p:hover {
    background: #e7e7e7;
  }
  &__title {
    border: 1px solid $grey;
    border-radius: $radius;
    padding: $padding;
  }

  &__title:hover {
    background: #e7e7e7;
  }
}
</style>
