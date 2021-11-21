# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Destroying Category"
Category.destroy_all

puts "Destroying Ingredients"
Ingredient.destroy_all

puts "Destroying meals"
Meal.destroy_all

puts "Destroying orders"
Order.destroy_all

puts "creating categories"
burger = Category.new( name: "burger" )
burger.save!

wrap = Category.new( name: "wrap" )
wrap.save!

pizza = Category.new( name: "pizza")
pizza.save!


puts "creating ingredients"

cheese = Ingredient.new(
  name: "cheese",
  calories: 120,
  cost_to_add: 0.5,
  default: true
)

cheese.save!

pepper = Ingredient.new(
  name: "pepper",
  calories: 50,
  cost_to_add: 0.2,
  default: false
)

pepper.save!

lettuce = Ingredient.new(
  name: "lettuce",
  calories: 20,
  cost_to_add: 0.1,
  default: true
)

lettuce.save!

puts "creating meals"

vegan_burger = Meal.new(
  name: "Cheese Burger",
  nickname: "Cheezy McBreezie",
  price: 3.50,
  calories: 250,
  time_to_make: 30,
  description: "So much cheese, you'll think you're in Switzerland",
  url: "https://www.kitchensanctuary.com/wp-content/uploads/2021/05/Double-Cheeseburger-square-FS-42.jpg"
)

vegan_burger.category = burger
vegan_burger.save!

vegan_burger = Meal.new(
  name: "Vegan Burger",
  nickname: "The VEGANATOR",
  price: 3.50,
  calories: 250,
  time_to_make: 30,
  description: "A delicious celebration of all that is vegan",
  url: "https://thumbs.dreamstime.com/b/flat-lay-healthy-vegan-burgers-quinoa-beetroot-patties-avocado-cream-green-sprouts-wooden-board-grey-wall-134457335.jpg"
)

vegan_burger.category = burger
vegan_burger.save!

puts "#{vegan_burger.name} created"


puts "#{vegan_burger.name} created"

vegan_pizza = Meal.new(
  name: "Vegan Pizza",
  nickname: "VEGGIE DISASTER",
  price: 3.50,
  calories: 250,
  time_to_make: 30,
  description: "Looks like a mess, tastes like a dream",
  url:  "https://www.diannesvegankitchen.com/wp-content/uploads/2019/01/Pizza-square-500x500.jpg"
)
vegan_pizza.category = pizza
vegan_pizza.save!

puts "#{vegan_pizza.name} created"

vegan_pizza = Meal.new(
  name: "Pepperoni Pizza",
  nickname: "Pepperini",
  price: 3.50,
  calories: 250,
  time_to_make: 30,
  description: "Spicy, tasty, can't beat a classic",
  url:  "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2014%2F07%2F10%2Fpepperoni-pizza-ck-x.jpg"
)
vegan_pizza.category = pizza
vegan_pizza.save!

puts "#{vegan_pizza.name} created"

vegan_pizza = Meal.new(
  name: "Hawaiian Pizza",
  nickname: "Marmite",
  price: 3.50,
  calories: 250,
  time_to_make: 30,
  description: "Love it or hate it, hawaiian is here to stay",
  url:  "https://img.kidspot.com.au/pZnR2nZu/kk/2015/03/hawaiian-pizza-recipe-605894-2.jpg"
)
vegan_pizza.category = pizza
vegan_pizza.save!

puts "#{vegan_pizza.name} created"

extras = Ingredient.all

Meal.all.each do |meal|
  extras.all.each do |ingredient|
    extra = MealIngredient.new
    extra.ingredient = ingredient
    extra.meal = meal
    extra.save!
  end
end

puts "all meal ingredients created"
