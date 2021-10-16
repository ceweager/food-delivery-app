class Api::V1::BasketsController < Api::V1::BaseController
  def show
    @basket = policy_scope(Basket).find(params[:id])
    authorize @basket
    @total = 0
    @order_items = @basket.order_meals.group(:meal_id).count.transform_keys do |item|
      @meal = policy_scope(Meal).find(item)
      authorize @meal
      @meal.name
    end
    @meals = policy_scope(Meal).all.each do |meal|
      @total += @order_items[meal.name] * meal.price if @order_items[meal.name]
    end
    render json: { orderItems: @order_items, meals: @meals, total: @total }
  end

  def destroy_order_item
  end
end
