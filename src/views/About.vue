<template>
  <div>
    <mainMenu />
    <div class="container">
      <h1>О нас</h1>
      <p>
        Мы занимаемся реализацией элементов трубопроводов, запорной арматуры,
        оборудования и комплектующих для объектов тепло–водо-газоснабжения и
        нефтепроводов.13 лет работы, широкий ассортимент на складе в Краснодаре,
        г, Сочи и Симферополе, низкие цены и максимально короткие сроки поставки
        позволяют фирме занимать лидирующее положение на рынке
        теплоэнергетических материалов в Южном регионе. Клиентами нашей фирмы
        являются около 3-х тыс. строительных организаций, магазинов и
        строительных баз расположенных на территории Краснодарского края и
        Северного Кавказа.
      </p>
    </div>
  </div>
</template>

<script>
import mainMenu from "@/components/HeaderMenu";

export default {
  name: "abaut",
  components: {
    mainMenu
  }
};
</script>

<style lang="scss" scoped>
.container {
  background: #fff;
  padding: 6vw 10vw;
  max-width: 60vw;
  margin: 50px auto;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
  font-family: "Open Sans", sans-serif;

  h1 {
    font-family: "Playfair Display";
    font-size: 24px;
    font-weight: 300;
    margin-top: 0;

    @media (min-width: 992px) {
      font-size: calc(100vw / 20);
    }
  }

  p {
    font-wight: 300;
    font-size: 14px;
    line-height: 1.6em;
    color: #555;
    @media (min-width: 992px) {
      font-size: calc(100vw / 75);
    }
  }
}
</style>
