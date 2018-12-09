export default {
  cart: ({ cart }) => cart,
  delItem: ({ delItem }) => delItem,
  Total: ({ Total }) => Total,
  TotalPositions: ({ TotalPositions }) => TotalPositions,
  Products: ({ items }) => items,
  GetProductsId: ({ items }) => id =>
    items[items.findIndex(obj => obj.id === id)] || null
};
