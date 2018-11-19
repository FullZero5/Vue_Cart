import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

export default {
  state: {
    items: [
      {
        id: 1,
        text: "lorem1",
        cost: 100,
        img: "https://via.placeholder.com/90"
      },
      {
        id: 2,
        text: "lorem2",
        cost: 200,
        img: "https://via.placeholder.com/90"
      },
      {
        id: 3,
        text: "lorem3",
        cost: 300,
        img: "https://via.placeholder.com/90"
      }
    ],
    cart: {},
    delItem: {},
    TotalPositions: 0,
    Total: 0
  },
  getters,
  actions,
  mutations
};
