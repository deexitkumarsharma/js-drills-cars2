function problem4(inventory) {
    let Data = [];
    inventory.map(car => Data.push(car["car_year"]));
    return Data;
}
module.exports = problem4;
