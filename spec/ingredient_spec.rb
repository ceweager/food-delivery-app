require 'rails_helper'

RSpec.describe Ingredient, type: :model do
  subject { Ingredient.new(name: "Lettuce", calories: 80, cost_to_add: 0.50 ) }

  it 'is valid with attributes' do
    expect(subject).to be_valid
  end

  it 'has a default status of true' do
    expect(subject.default).to be_truthy
  end

  describe 'when no attributes associated' do
    let(:ingredient) { Ingredient.new }
    it 'will be invalid without a name' do
      ingredient.valid?
      expect(ingredient.errors[:name]).to include("can't be blank")
    end

    it 'will be invalid without calories' do
      ingredient.valid?
      expect(ingredient.errors[:calories]).to include("can't be blank")
    end

    it 'will be invalid without cost_to_add' do
      ingredient.valid?
      expect(ingredient.errors[:cost_to_add]).to include("can't be blank")
    end
  end

  describe 'when attributes are not numerical' do
    let(:ingredient) { Ingredient.new(calories: "test", cost_to_add: "test") }

    it 'will be invalid if calories is not a number' do
      ingredient.valid?
      expect(ingredient.errors[:calories]).to include("is not a number")
    end

    it 'will be invalid if cost_to_add is not a number' do
      ingredient.valid?
      expect(ingredient.errors[:cost_to_add]).to include("is not a number")
    end
  end

  describe 'when default is null' do
    let(:ingredient) { Ingredient.new(default: nil) }
    it 'is invalid when default is not a boolean' do
      ingredient.valid?
      expect(ingredient.errors[:default]).to include("is not a boolean")
    end
  end
end
