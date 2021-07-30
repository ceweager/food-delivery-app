require 'rails_helper'

RSpec.describe Meal, type: :model do
  subject do
    Meal.new(name: "burger", nickname: "Big whopper", price: 5.50, calories: 350, time_to_make: 30,
             dsscription: "A brilliant burger, a genius of cuisine", category: "burger")
  end

  it 'is valid with attributes' do
    expect(subject).to be_valid
  end

  describe 'when a meal is created' do
    before do
      meal = Meal.new
      meal.valid?
    end

    it 'should be invalid without a name' do
      expect(meal.errors[:name]).to include("can't be blank")
    end

    it 'should be invalid without a nickname' do
      expect(meal.errors[:nickname]).to include("can't be blank")
    end

    it 'should be invalid without a price' do
      expect(meal.errors[:price]).to include("can't be blank")
    end

    it 'should be invalid without calories' do
      expect(meal.errors[:calories]).to include("can't be blank")
    end

    it 'should be invalid without time_to_make' do
      expect(meal.errors[:time_to_make]).to include("can't be blank")
    end

    it 'should be invalid without description' do
      expect(meal.errors[:description]).to include("can't be blank")
    end

    it 'should be invalid without category' do
      expect(meal.errors[:category]).to include("can't be blank")
    end
  end
end
