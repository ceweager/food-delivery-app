class AddUrlToMeals < ActiveRecord::Migration[6.0]
  def change
    add_column :meals, :url, :string
  end
end
