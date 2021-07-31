class CreateMeals < ActiveRecord::Migration[6.0]
  def change
    create_table :meals do |t|
      t.string :name
      t.string :nickname
      t.integer :price
      t.integer :calories
      t.integer :time_to_make
      t.text :description

      t.timestamps
    end
  end
end
