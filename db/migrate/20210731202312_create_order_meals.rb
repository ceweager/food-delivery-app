class CreateOrderMeals < ActiveRecord::Migration[6.0]
  def change
    create_table :order_meals do |t|
      t.references :meal, null: false, foreign_key: true
      t.references :order, null: true, foreign_key: true
      t.timestamps
    end
  end
end
