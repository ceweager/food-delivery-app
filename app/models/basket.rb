class Basket < ApplicationRecord
  belongs_to :user
  has_many :order_meals, dependent: :destroy

  def all_basket_orders
    order_meals.group(:meal_id).count.transform_keys do |item|
      @meal = policy_scope(Meal).find(item)
      authorize @meal
      @meal.name
    end
  end
end
