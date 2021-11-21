class OrderMealPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      scope.all
    end
  end

  def show?
    user == record.user
  end

  def create?
    true
  end

  def delete?
    record.submitted ? user.staff : user == record.user
  end

  def update?
    record.submitted ? user.staff : user == record.user
  end
end
