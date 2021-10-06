class Api::V1::OrdersController < Api::V1::BaseController
  before_action :find_user, only: :create
  def new
    @order = Order.new
  end

  def create
    @order = Order.new
    @order.created = true
    @order.submitted = true
    @order.user = @user
    if @order.save
      update_order_meals
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
