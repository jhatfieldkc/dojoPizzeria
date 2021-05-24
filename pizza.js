function pizzaOven(crustType, sauceType, cheeses, toppings) {
  var pizza = {};
  pizza.crustType = crustType;
  pizza.sauceType = sauceType;
  pizza.cheeses = cheeses;
  pizza.toppings = toppings;
  return pizza;
}

var pizza1 = pizzaOven(
  "Deep dish",
  "traditional",
  ["mozzarella"],
  ["pepperoni", "sausage"]
);
var pizza2 = pizzaOven(
  "Hand tossed",
  "marinara",
  ["mozzarella", "feta"],
  ["mushrooms", "olives", "onions"]
);
var pizza3 = pizzaOven(
  "Hand tossed",
  "BBQ",
  ["mozzarella", "cheddar"],
  ["Canadian bacon", "grilled chicken", "Pineapple"]
);
var pizza4 = pizzaOven("Thick", "Chocolate sauce", "Cream cheese", [
  "Brown sugar",
  "Cinnamon",
  "Chocolate syrup",
]);

console.log(pizza2);
