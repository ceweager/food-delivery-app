class Api::V1::MealsController < Api::V1::BaseController
  before_action :find_meal, only: :show
  def index
    @meals = params[:query].present? ? policy_scope(Meal).where(category: params[:query]) : policy_scope(Meal)
    @categories = Category.all
    @popular = policy_scope(Meal).left_joins(:order_meals).group(:id).order('COUNT(order_meals.id) DESC').limit(5)
    render json: { meals: @meals, categories: @categories, popular: @popular }
  end

  def show
  end

  private

  def find_meal
    @meal = Meal.find(params[:id])
    authorize @meal
  end
end
