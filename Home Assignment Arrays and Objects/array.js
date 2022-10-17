const dishes = [
  {"dishId": "Dish1",
  "dishName": "Adobo,",
  "dishPrice": 100,
  "ingredients": ["soy sauce", "vinegar", "pork shoulder", "salt", "pepper"]},
  {"dishId": "Dish2",
  "dishName": "Sinigang,",
  "dishPrice": 150,
  "ingredients": ["fish sauce", "sinigang mix", "pork cubes", "vegetables"]},
  {"dishId": "Dish3",
  "dishName": "Fried Chicken,",
  "dishPrice": 180,
  "ingredients": ["salt", "pepper", "chicken legs", "cooking oil",]},
]



const menu = {
  "restaurantName": "Dahmers Specialties",
  "dishes": dishes,
  "displayRestaurantName": function() {
    console.log(this.restaurantName);
  },

  "displayMenu": function() {
    for(const dish of this.dishes){
      console.log(dish.dishName, "\u20B1" + Number(dish.dishPrice), "\n contains: " + dish.ingredients);
    }
  }
}

menu.displayRestaurantName();
menu.displayMenu();