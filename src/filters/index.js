import Vue from "vue";

Vue.filter("currency", str => str.toFixed(2));
