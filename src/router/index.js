import Vue from "vue"
import VueRouter from "vue-router"
import Catalog from "../components/catalog/v-catalog"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "catalog",
    component: () => import("../components/catalog/v-catalog"),
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("../components/cart/v-cart"),
    props: true,
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
