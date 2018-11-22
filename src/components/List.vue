<template>
  <div>
    <h1>Товары</h1>
    <ul class="ProductSet" v-bind:class="view">
      <li
        v-for="item in Products"
        v-bind:key="item.id"
        class="ProductCard"
        v-bind:class="view_c"
      >
        <div class="ProductCard__img-wrapper">
          <img
            :src="item.img + '2000'"
            :alt="item.text"
            class="ProductCard__img"
          />
        </div>
        <div class="ProductCard__details">
          <div class="ProductCard__details__header">
            <div class="ProductCard__titles">
              <h4 class="ProductCard__title">{{ item.text }}</h4>
              <h5 class="ProductCard__price">{{ item.cost }} ₽</h5>
            </div>
            <button @click="addToItems(item);" class="IconBtn">
              В корзину
            </button>
          </div>
          <p class="ProductCard__description">
            Описание товара {{ item.text }} - текст текст текст
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "List",
  data() {
    return {
      view: "ProductSet--grid",
      view_c: "ProductCard--grid"
    };
  },
  computed: {
    ...mapGetters(["Products"])
  },
  methods: {
    ...mapActions(["addToItems"])
  }
};
</script>
