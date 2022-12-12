const { boatInventory } = require("./fishingBoat");

const todaysCatch = boatInventory();

const mongersPurchase = (obj, budget) => {
  const mongersCatch = [];
  for (const fish of obj) {
    if (fish.price <= budget && fish.amount >= 10) {
      fish.amount = 10;
      mongersCatch.push(fish);
    }
  }
  return mongersCatch;
};
// variation for writing a one linefunction that implies return
// const mongerInventory = (budget) => mongerPurchase(todaysCatch, budget)

// input budget for monger to spend per fish from fishingboat
const mongerInventory = () => {
  return mongersPurchase(todaysCatch, 7.5);
};

module.exports = { mongerInventory };
