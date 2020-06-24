import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles/styles.scss'
import 'material-design-icons'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
