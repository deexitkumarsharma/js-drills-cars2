function sortAlphabetically(inventory) {
  let result = [];
  let SortModel = inventory.map((X) => {
    result.push(X.car_model);
  });
  return result.sort();
}
module.exports = sortAlphabetically;
