class CreateIngredients < ActiveRecord::Migration[6.0]
  def change
    create_table :ingredients do |t|
      t.string :name
      t.integer :calories
      t.integer :cost_to_add
      t.boolean :default, default: true

      t.timestamps
    end
  end
end
