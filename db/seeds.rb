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
  name: "Vegan Burger",
  nickname: "The VEGANATOR",
  price: 3.50,
  calories: 250,
  time_to_make: 30,
  description: "A delicious celebration of all that is vegan"
)

vegan_burger.category = burger
vegan_burger.save!

puts "#{vegan_burger.name} created"

vegan_pizza = Meal.new(
  name: "Vegan Pizza",
  nickname: "VEGGIE DISASTER",
  price: 3.50,
  calories: 250,
  time_to_make: 30,
  description: "A delicious celebration of all that is vegan"
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
