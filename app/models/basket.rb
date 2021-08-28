class Basket < ApplicationRecord
  belongs_to :user
  has_many :order_meals
end
