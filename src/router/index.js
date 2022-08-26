import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/home",
      component: () => import("../views/home/home.vue")
    },
    {
      path: "/favor",
      component: () => import("../views/favor/favor.vue")
    },
    {
      path: "/order",
      component: () => import("../views/order/order.vue")
    },
    {
      path: "/message",
      component: () => import("../views/message/message.vue")
    },
    {
      path: "/city",
      component: () => import("../views/city/city.vue"),
      meta: {
        hidderTabar: true
      }
    },
    {
      path: "/search",
      component: () => import("../views/search/search.vue"),
      meta: {
        hidderTabar: true
      }
    },
    {
      path: "/detail/:id",
      component: () => import("../views/detail/detail.vue"),
      meta: {
        hidderTabar: true
      }
    }
  ]
})

export default router
