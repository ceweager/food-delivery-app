require 'rails_helper'

RSpec.describe OrderMeal, type: :model do
  subject { OrderMeal.new }
  let(:meal) { double(Meal, id: 1) }
  let(:order) { double(Order, id: 1) }

  describe 'when no attributes associated' do
    it 'will not be valid with no items associated' do
      expect(subject).to_not be_valid
    end
  end
end
