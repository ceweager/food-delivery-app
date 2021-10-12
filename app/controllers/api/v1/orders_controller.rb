class Api::V1::OrdersController < Api::V1::BaseController
  before_action :find_user, only: %i[create index]

  def index
    @orders = policy_scope(Order).where(user_id: @user.id)
    render json: @orders
  end

  def show
    @order = policy_scope(Order).find(params[:id])
    authorize @order
    @order_meals = @order.order_meals.group(:meal_id).count
    @total = 0
    @meals = policy_scope(Meal).all.map do |meal|
      @count = @order_meals[meal.id]
      @price = @count * meal.price
      @total += @price
      meal.price = @price
      meal
    end
    render json: { meals: @meals, total: @total, orderMeals: @order_meals }
  end

  def new
    @order = Order.new
  end

  def create
    if @user.baskets.last.order_meals.length >= 1
      @order = Order.new
      @order.created = true
      @order.submitted = true
      @order.user = @user
      if @order.save
        update_order_meals
        authorize @order
        render json: @order
      else
        render_error
      end
    end
  end

  # def delete
  #   @order = Order.find(params[:id])
  #   if @order.delivery_complete
  #     @order.destroy
  #     head :no_content
  #   end
  # end

  private

  def update_order_meals
    @user.baskets.last.order_meals.each do |order_meal|
      order_meal.order = @order
      order_meal.basket = nil
      order_meal.save!
    end
  end

  def find_user
    @user = User.find(params[:user_id])
  end

  def find_basket
    @basket = Basket.find(params[:basket_id])
  end
end
