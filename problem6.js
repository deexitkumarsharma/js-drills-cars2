function luxuryCars(inventory) {
  let arr = inventory.filter(
    (car) => car["car_make"] == "BMW" || car["car_make"] == "Audi"
  );
  return JSON.stringify(arr);
}

module.exports = luxuryCars;
