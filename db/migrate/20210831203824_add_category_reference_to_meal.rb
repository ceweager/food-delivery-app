class AddCategoryReferenceToMeal < ActiveRecord::Migration[6.0]
  def change
    add_reference :meals, :category, null: false, foreign_key: true
  end
end
