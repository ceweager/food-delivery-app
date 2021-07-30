class OrderPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      scope.all
    end
  end

  def index
    @orders = policy_scope(Order).order(created_at: :desc)
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
