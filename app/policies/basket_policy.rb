class BasketPolicy < ApplicationPolicy
  attr_reader :record

  class Scope < Scope
    def resolve
      scope.all
    end
  end

  def show
    true
  end
end
