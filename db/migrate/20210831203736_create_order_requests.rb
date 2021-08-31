class CreateOrderRequests < ActiveRecord::Migration[6.0]
  def change
    create_table :order_requests do |t|
      t.references :order_meal, null: false, foreign_key: true
      t.references :ingredient, null: false, foreign_key: true

      t.timestamps
    end
  end
end
