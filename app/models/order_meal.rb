class OrderMeal < ApplicationRecord
  belongs_to :meal
  belongs_to :order
  belongs_to :basket
end
