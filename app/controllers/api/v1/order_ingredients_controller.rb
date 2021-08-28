class Api::V1::OrderIngredientsController < Api::V1::BaseController
  before_action :find_basket
  def show
    @basket = Basket.find(params[:id])
  end

  private

  def find_user
    @user = Basket.find(params[:id])
  end
end
