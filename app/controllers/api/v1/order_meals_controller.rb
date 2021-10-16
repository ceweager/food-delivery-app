class Api::V1::OrderMealsController < Api::V1::BaseController
  before_action :find_user, only: %i[new create destroy]
  before_action :find_meal, only: %i[new create]
  def new
    @order_meal = OrderMeal.new
  end

  def create
    params[:count].times do
      @order_meal = OrderMeal.new
      @order_meal.meal = @meal
      @order_meal.basket = @user.baskets.first
      add_extras if params[:extras]
      @order_meal.save
      authorize @order_meal
    end
    render json: @user.baskets.first.order_meals
  end

  def destroy
    @order_meal = @user.baskets.first.order_meals.where(meal_id: params[:meal_id]).last
    @order_meal.destroy
    head :no_content
  end

  private

  def find_user
    @user = User.find(params[:user_id])
  end

  def find_meal
    @meal = Meal.find(params[:meal_id])
  end

  def add_extras
    params[:extras].each do |extra|
      @ingredient = OrderIngredient.new
      @ingredient.ingredient = Ingredient.find(extra)
      @ingredient.order_meal = @order_meal
      @ingredient.save!
    end
  end
end
