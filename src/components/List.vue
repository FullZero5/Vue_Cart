<template>
  <div>
    <h1>Товары</h1>
    <ul>
      <li v-for="item in Products" v-bind:key="item.id">
        {{ item.text }} - {{ item.cost }} ₽<button @click="addToItems(item);">
          В корзину
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "List",
  computed: {
    ...mapGetters(["Products"])
  },
  methods: {
    ...mapActions(["addToItems"])
  }
};
</script>
