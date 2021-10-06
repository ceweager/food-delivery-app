class AddBasketToOrderMeal < ActiveRecord::Migration[6.0]
  def change
    add_reference :order_meals, :basket, null: true, foreign_key: true
  end
end
