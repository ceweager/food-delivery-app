class CreateOrders < ActiveRecord::Migration[6.0]
  def change
    create_table :orders do |t|
      t.boolean :created, default: false
      t.boolean :submitted, default: false
      t.boolean :prep_start, default: false
      t.boolean :prep_complete, default: false
      t.boolean :cooking_start, default: false
      t.boolean :cooking_complete, default: false
      t.boolean :delivery_start, default: false
      t.boolean :delivery_complete, default: false
      t.integer :rating, default: 0

      t.timestamps
    end
  end
end
