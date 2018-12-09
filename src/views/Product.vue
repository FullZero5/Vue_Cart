<template>
  <div class="container" v-if="item">
    <div class="wrapper">
      <div class="header">
        <div class="price">
          <h1>{{ item.cost | currency }} ₽</h1>
        </div>
        <div class="heart-wrap"><a href="/">Назад</a></div>
      </div>
      <div class="product">
        <ImageItem v-if="item.thumb_photo" :source="item.thumb_photo" />
      </div>
      <div class="info">
        <div class="title">
          <h1>{{ item.title }}</h1>
          <p>{{ item.description }}</p>
        </div>
        <button class="buyBtn" @click="addToItems(item);">Купить</button>
      </div>
    </div>
    <Cart />
  </div>
  <div class="container" v-else>
    <div class="wrapper">
      <div class="header">
        <div class="price"><h1>Хьюстон, у нас проблема ...</h1></div>
        <div class="info">
          <div class="title">
            <h2>Очень жаль но</h2>
            <p>к сожалению данная позиция отсутствует или удалена</p>
          </div>
          <a class="buyBtn" href="/">На главную</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ImageItem from "@/components/ImageItem";
import Cart from "@/components/Cart";

export default {
  name: "Product",
  components: {
    ImageItem,
    Cart
  },
  methods: {
    ...mapActions(["addToItems"])
  },
  computed: {
    ...mapGetters(["GetProductsId"]),
    item() {
      return this.GetProductsId(parseInt(this.$route.params.id));
    }
  }
};
</script>

<style lang="scss">
$price: #fe6417;

$heart2: #ff1312;
$title: #6d1deb;
$button: #120494;

$white: #fff;
$black: #212129;

* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  text-align: center;
  outline: none;
  border: none;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
}

::selection {
  background: $black;
}

img {
  max-width: 100%;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.container {
  position: relative;
  background: $white;
  max-width: 600px;
  margin: 0 auto;
  margin-top: 40px;
  padding: 50px;
  border-radius: 20px;
  .wrapper {
    margin: 0;
    .header {
      padding: 0;
      margin-top: -30px;
      .price h1 {
        color: $price;
        font-size: 1.65em;
        text-align: left;
        font-weight: bold;
      }
      .heart-wrap {
        position: relative;
        right: 0;
        left: 0;
        margin-top: -30px;
        text-align: right;
        i.heart:after {
          text-align: right;
          content: "\f004";
          color: $heart2;
          font-size: 1.8em;
        }
      }
    }
    .info {
      padding: 0;
      .title h1 {
        color: $title;
        font-size: 1.5em;
        margin-top: 15px;
        padding: 10px;
      }
      .buyBtn {
        background: $button;
        color: $white;
        font-size: 1.5em;
        font-weight: bold;
        text-transform: uppercase;
        margin-top: 30px;
        padding: 15px 80px;
        border-radius: 50px;
        cursor: pointer;
        transition: 300ms;
        &:hover {
          background: $black;
          color: $button;
          transition: 300ms;
        }
      }
    }
  }
}
</style>
