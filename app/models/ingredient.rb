class Ingredient < ApplicationRecord
  has_many :meal_ingredients
  has_many :order_requests
  validates :name, :calories, :cost_to_add, presence: true
  validates :calories, :cost_to_add, numericality: true
  validates :default, inclusion: { in: [true, false],
                                   message: "is not a boolean" }
end
