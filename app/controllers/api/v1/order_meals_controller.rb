class Api::V1::OrderMealsController < Api::V1::BaseController
  before_action :find_user
  def new
    @order_meal = OrderMeal.new
  end

  def create
    @order_meal = OrderMeal.new
    @order_meal.user = current_user
    create_basket unless current_user.basket
    @order_meal.basket = current_user.basket
    authorize @order_meal
    if @order_meal.save
      render :show, status: :created
    else
      render_error
    end
  end

  def delete
    @order_meal = Ordermeal.find(params[:id])
    @order_meal.destroy
    head :no_content
  end

  private

  def find_user
    @user = User.find(params[:user])
  end

  def create_basket
    @basket = Basket.new
    @basket.user = current_user
    authorize @basket
    @basket.save
  end
end
