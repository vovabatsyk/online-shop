import Vue from "vue"
import VueRouter from "vue-router"
//import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "catalog",
    component: () => import("../components/v-catalog"),
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("../components/v-cart"),
    props: true,
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
