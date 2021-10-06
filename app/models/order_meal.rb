class OrderMeal < ApplicationRecord
  belongs_to :meal
  belongs_to :order, optional: true
  belongs_to :basket, optional: true
  has_many :order_requests, dependent: :destroy
end
