class Api::V1::BasketsController < Api::V1::BaseController
  before_action :find_user
  def show
    @basket = Basket.find(params[:id])
  end

  private

  def find_user
    @user = User.find(params[:id])
  end
end
