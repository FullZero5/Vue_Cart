<template>
  <div>
    <mainMenu /> <toggleMenu />
    <main><List /></main>
    <Cart />
  </div>
</template>

<script>
import List from "@/components/List";
import Cart from "@/components/Cart";
import mainMenu from "@/components/HeaderMenu";
import toggleMenu from "@/components/Toggle";

export default {
  name: "home",
  components: {
    List,
    Cart,
    mainMenu,
    toggleMenu
  }
};
</script>

<style scoped></style>
