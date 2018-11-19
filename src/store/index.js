import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

export default {
  state: {
    items: [
      {
        id: 1,
        text: "lorem1",
        cost: 100
      },
      {
        id: 2,
        text: "lorem2",
        cost: 200
      },
      {
        id: 3,
        text: "lorem3",
        cost: 300
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
