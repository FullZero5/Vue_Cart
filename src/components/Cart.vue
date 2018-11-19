<template>
  <transition name="fade">
    <div
      class="cd-cart-container"
      v-bind:class="TotalPositions ? '' : 'empty'"
      v-if="TotalPositions > 0"
    >
      <a
        href="#"
        class="cd-cart-trigger"
        @click.prevent="
          $event.target.parentElement.classList.toggle('cart-open');
        "
      >
        <ul class="count">
          <li id="count-cart">{{ TotalPositions }}</li>
          <li>0</li>
        </ul>
      </a>
      <div class="cd-cart">
        <div class="wrapper">
          <header>
            <h2>Корзина</h2>
            <span
              class="undo"
              v-bind:class="Object.keys(delItem).length > 0 ? 'visible' : ''"
              >удалено. <a href="#0">Восстановить</a></span
            >
          </header>
          <div class="body">
            <ul>
              <li class="product" v-for="item in cart" v-bind:key="item.id">
                <div class="product-image">
                  <a href="#0"> <img :src="item.img" :alt="item.text" /> </a>
                </div>
                <div class="product-details">
                  <h3>
                    <a href="#">{{ item.text }}</a>
                  </h3>
                  <span class="price">{{ item.cost }} ₽</span>
                  <div class="actions">
                    <a
                      href="#"
                      class="delete-item"
                      @click.prevent="removeItem(item.id);"
                      >Удалить</a
                    >
                    <div class="quantity">
                      <label for="cd-product">Кол-во</label>
                      <span class="select">
                        <select
                          name="quantity"
                          v-model="item.qt"
                          @change="chengeQt();"
                        >
                          <option :value="1">1</option>
                          <option :value="2">2</option>
                          <option :value="3">3</option>
                          <option :value="4">4</option>
                          <option :value="5">5</option>
                          <option :value="6">6</option>
                          <option :value="7">7</option>
                          <option :value="8">8</option>
                          <option :value="9">9</option>
                        </select>
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <footer>
            <router-link to="/checkout" class="checkout btn">
              <em
                >Итого - <span>{{ Total }} ₽</span></em
              >
            </router-link>
          </footer>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Cart",
  data() {
    return {
      cartOpen: null
    };
  },
  computed: {
    ...mapGetters(["cart", "TotalPositions", "delItem", "Total"])
  },
  methods: {
    ...mapActions(["removeItem", "chengeQt"]),
    showCart(event) {
      console.log(event);
    }
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>
