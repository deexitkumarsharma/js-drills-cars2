const previosArray = require("./problem4");
const inventory = require("./inventory");

let result = previosArray(inventory);

function olderCars(inventory) {
  let arr = result.filter((element) => {
    return element < 2000;
  });
  return arr;
}

module.exports = olderCars;
