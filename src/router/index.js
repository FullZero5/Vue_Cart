import Vue from "vue";
import Router from "vue-router";
import IndexPage from "@/views/Index";
import CheckoutPage from "@/views/Checkout";
import AboutPage from "@/views/About";
import ProductPage from "@/views/Product";
import NotFoundPage from "@/views/NotFound";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      meta: {
        title: "Home"
      },
      component: IndexPage
    },
    {
      path: "/checkout",
      name: "Checkout",
      meta: {
        title: "Checkout"
      },
      component: CheckoutPage
    },
    {
      path: "/about",
      name: "AboutPage",
      title: "AboutPage",
      component: AboutPage
    },
    {
      path: "/product/:id",
      name: "ProductPage",
      title: "ProductPage",
      component: ProductPage
    },
    {
      path: "/404",
      name: "404",
      component: NotFoundPage
    },
    {
      path: "*",
      redirect: "/404"
    }
  ]
});
