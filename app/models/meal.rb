class Meal < ApplicationRecord
  has_many :order_meals, dependent: :destroy
  has_many :meal_ingredients, dependent: :destroy
  belongs_to :category
  validates :name, :nickname, :price, :calories, :time_to_make, :description, presence: true
  validates :calories, :time_to_make, numericality: { only_integer: true }
  validates :price, numericality: { only_float: true }
  validates :name, :nickname, length: { maximum: 17 }
  validates :description, length: { maximum: 200 }
end
