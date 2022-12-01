function makeAndModel(arr) {
  let findlastcar = arr.filter((arry) => arr.indexOf(arry) == arr.length - 1);
  return `Last Car is ${
    findlastcar[0].id +
    " " +
    findlastcar[0].car_make +
    " " +
    findlastcar[0].car_model
  }`;
}

module.exports = makeAndModel;
