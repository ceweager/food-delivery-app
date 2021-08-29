class Api::V1::OrderMealsController < Api::V1::BaseController
  before_action :find_user, only: [:new, :create]
  def new
    @order_meal = OrderMeal.new
  end

  def create
    @order_meal = OrderMeal.new
    @order_meal.user = @user
    create_basket unless @user.basket
    @order_meal.basket = @user.basket
    if params[:extras]
      add_extras
    end
    authorize @order_meal
    if @order_meal.save
      render :show, status: :created
    else
      render_error
    end
  end

  def destroy
    @order_meal = Ordermeal.find(params[:id])
    @order_meal.destroy
    head :no_content
  end

  private

  def find_user
    @user = User.find(params[:user])
  end

  def add_extras
    params[:extras].each do |extra|
      @ingredient = OrderIngredient.new
      @ingredient.ingredient = Ingredient.find(extra)
      @ingredient.order_meal = @order_meal
      @ingredient.save!
    end
  end

  def create_basket
    @basket = Basket.new
    @basket.user = @user
    authorize @basket
    @basket.save
  end
end
