class OrderRequest < ApplicationRecord
  belongs_to :order_meal
  belongs_to :ingredient
end
