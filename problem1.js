function carInformation(inventory, id) {
  let output = inventory.filter((car) => car["id"] == id);
  return output[0];
}

module.exports = carInformation;
