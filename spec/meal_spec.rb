require 'rails_helper'

RSpec.describe Meal, type: :model do
  subject do
    Meal.new(name: "burger", nickname: "Big whopper", price: 5.50, calories: 350, time_to_make: 30,
             description: "A brilliant burger, a genius of cuisine")
  end

  it 'is valid with attributes' do
    expect(subject).to be_valid
  end

  describe 'when attributes are not specified' do
    let(:meal) { Meal.new }

    before do
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

    # it 'should be invalid without category' do
    #   expect(meal.errors[:category]).to include("can't be blank")
    # end
  end
  describe 'when the wrong attribute type is input' do
    let(:meal_two) { Meal.new(price: "test", calories: "test", time_to_make: "testS") }

    before do
      meal_two.valid?
    end

    it 'should be invalid if price is not a number' do
      expect(meal_two.errors[:price]).to include("is not a number")
    end

    it 'should be invalid if calories is not a number' do
      expect(meal_two.errors[:calories]).to include("is not a number")
    end

    it 'should be invalid if time to make is not a number' do
      expect(meal_two.errors[:time_to_make]).to include("is not a number")
    end
  end

  describe 'when the length is incorrect' do
    let(:meal_three) do
      Meal.new(
        name: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu",
        nickname: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu",
        price: 5.50,
        calories: 350,
        time_to_make: 30,
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qurt"
      )
    end

    before do
      meal_three.valid?
    end

    it 'should be invalid if meal name is greater than 15 characters' do
      expect(meal_three.errors[:name]).to include("is too long (maximum is 15 characters)")
    end

    it 'should be invalid if meal nickname is greater than 15 characters' do
      expect(meal_three.errors[:nickname]).to include("is too long (maximum is 15 characters)")
    end

    it 'should be invalid if description is greater than 200 characters' do
      expect(meal_three.errors[:description]).to include("is too long (maximum is 200 characters)")
    end
  end
end
