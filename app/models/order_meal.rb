class OrderMeal < ApplicationRecord
  belongs_to :meal
  belongs_to :order
  belongs_to :basket
  has_many :order_requests, dependent: :destroy
end
