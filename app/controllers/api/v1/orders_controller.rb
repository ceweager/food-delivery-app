class Api::V1::OrdersController < Api::V1::BaseController
  # before_action :find_user
  before_action :find_basket
  def new
    @order = Order.new
  end

  def create
    @order = Order.new
    @order.created = true
    @order.submitted = true
    @order.user = current_user
    authorize @order
    if @order.save
      update_order_meals
      render :show, status: :created
    else
      render_error
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
    @basket.order_meals.each do |order_meal|
      order_meal.order = @order
      order_meal.basket = nil
      order_meal.save
    end
  end

  def find_user
    @user = User.find(params[:user])
  end

  def find_basket
    @basket = Basket.find(params[:basket_id])
  end
end
