require 'rails_helper'

RSpec.describe User, type: :model do
  subject do
    User.new(first_name: "John", last_name: "Doe", address: "12 Westmoor lane", email: "test@test.com",
             password: "test1234", staff: false)
  end

  before { subject.save }

  it 'is valid with valid attributes' do
    expect(subject).to be_valid
  end

  it 'has staff set to false as default' do
    expect(subject.staff).to be_falsy
  end

  context 'when presence validations are in place' do
    let(:new_user) do
      User.new
    end

    it 'is not valid when first name is nil' do
      new_user.valid?
      expect(new_user.errors[:first_name]).to include("can't be blank")
    end

    it 'is not valid when last name is nil' do
      new_user.valid?
      expect(new_user.errors[:last_name]).to include("can't be blank")
    end

    it 'is not valid when address is nil' do
      new_user.valid?
      expect(new_user.errors[:address]).to include("can't be blank")
    end

    it 'is not valid when email is nil' do
      new_user.valid?
      expect(new_user.errors[:email]).to include("can't be blank")
    end

    it 'is not valid when staff is nil' do
      new_user.valid?
      expect(new_user.errors[:staff]).to include("is not included in the list")
    end
  end

  context 'when length validations are in place' do
    let(:first_username) do
      User.new(first_name: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean motee test")
    end

    let(:last_username) do
      User.new(last_name: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean motee test")
    end

    it 'is invalid when first name has more than 15 characters' do
      first_username.valid?
      expect(first_username.errors[:first_name]).to include("is too long (maximum is 15 characters)")
    end

    it 'is invalid when last name has more than 100 characters' do
      last_username.valid?
      expect(last_username.errors[:last_name]).to include("is too long (maximum is 15 characters)")
    end
  end
end
