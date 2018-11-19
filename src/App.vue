<template>
  <div id="app">
    <default-layout> <router-view></router-view> </default-layout>
  </div>
</template>

<script>
import DefaultLayout from "@/layouts/LayoutDefault";

export default {
  name: `App`,
  components: {
    DefaultLayout
  }
};
</script>
