class Api::V1::BasketsController < Api::V1::BaseController
  def show
    @basket = policy_scope(Basket).find(params[:id])
    authorize @basket
    @order_items = @basket.order_meals.group(:meal_id).count.transform_keys do |item|
      @meal = policy_scope(Meal).find(item)
      authorize @meal
      @meal.name
    end
    @meals = policy_scope(Meal).all
    render json: { orderItems: @order_items, meals: @meals }
  end

  def destroy_order_item
  end
end
