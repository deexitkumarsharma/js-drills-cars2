function years(inventory) {
  let Data = [];
  inventory.map((car) => Data.push(car["car_year"]));
  return Data;
}
module.exports = years;
