<template>
  <div class="v-popup-wrapper" ref="popup-wrapper">
    <div class="v-popup">
      <div class="v-popup__header">
        <span>{{ popupTitile }} </span>
        <span class="material-icons close" @click="closePopup"
          >cancel_presentation</span
        >
      </div>
      <div class="v-popup__content"><slot></slot></div>
      <div class="v-popup__footer">
        <button class="btn" @click="closePopup">close</button>
        <button class="btn" @click="addPopup">{{ popupRightBtn }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-popup',
  props: {
    popupTitile: {
      type: String,
      default: 'Title',
    },
    popupRightBtn: {
      type: String,
      default: 'Ok',
    },
  },
  methods: {
    closePopup() {
      this.$emit('closePopup')
    },
    addPopup() {
      this.$emit('addPopup')
    },
  },
  mounted() {
    document.addEventListener('click', (item) => {
      if (item.target === this.$refs['popup-wrapper']) {
        this.closePopup()
      }
    })
  },
}
</script>

<style lang="scss">
.v-popup-wrapper {
  background: rgba(64, 64, 64, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
}
.v-popup {
  padding: $padding * 2;
  position: fixed;
  top: 50px;
  min-width: 300px;
  box-shadow: 0 0 8px 0 $grey;
  background: #ffff;
  padding: $padding * 2;
  &__header,
  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .close {
    cursor: pointer;
  }
}
</style>
