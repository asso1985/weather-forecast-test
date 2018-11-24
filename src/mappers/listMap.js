export const listMap = (data, itemMapper) => ({
  items : data.items.map(item => (itemMapper(item)))
});
