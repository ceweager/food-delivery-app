require 'rails_helper'

RSpec.describe Order, type: :model do
  let(:user) { double(User, id: 1) }
  subject do
    Order.new(user_id: user.id, created: true)
  end

  describe 'when new order is created' do
    it 'has a created status set to true' do
      expect(subject.created).to eq(true)
    end

    it 'has a submitted status set to false' do
      expect(subject.submitted).to eq(false)
    end

    it 'has a prep started status set to false' do
      expect(subject.prep_start).to eq(false)
    end

    it 'has a prep complete status set to false' do
      expect(subject.prep_complete).to eq(false)
    end

    it 'has a cooking start status set to false' do
      expect(subject.cooking_start).to eq(false)
    end

    it 'has a cooking complete status set to false' do
      expect(subject.cooking_complete).to eq(false)
    end

    it 'has a delivery start status set to false' do
      expect(subject.delivery_start).to eq(false)
    end

    it 'has a cooking start status set to false' do
      expect(subject.delivery_complete).to eq(false)
    end

    it 'has a rating set to zero' do
      expect(subject.rating).to be_zero
    end
  end
end
