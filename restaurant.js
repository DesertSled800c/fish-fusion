const { mongerInventory } = require("./fishMonger.js")

const mongersCatch = mongerInventory()

const fishRestaurant = (obj,price) => {
    const restaurantBuys = []
    for (const fish of obj) {
        if(fish.price <= price) {
            fish.amount /= 2
            restaurantBuys.push(fish)
        }
    }
    return restaurantBuys 
}

const restaurantBuys = fishRestaurant(mongersCatch, 5)
// input budget for restraunt to spend per fish from fishmonger

const fishMenu = () => {
    for (const fish of restaurantBuys) {
       console.log(`
       <h1>Menu</h1>
       <article class="menu">
            <h2>${fish.species}</h2>
            <section class="menu__item">${fish.species} Soup</section>
            <section class="menu__item">${fish.species} Sandwich</section>
            <section class="menu__item">Grilled ${fish.species}</section>
       </article> `)

    }
    return
}

module.exports = { fishMenu }
