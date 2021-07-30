class OrderController < ApplicationController
  before_action :find_user, only[:new, :show :create, :destroy, :edit, :update]
  def index
    @orders = policy_scope(Order).order(created_at: :desc)
  end

  def show
  end

  def new
  end

  def create
  end

  def edit
  end

  def update
  end

  def destroy
  end
end
