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
      expect(new_user.first_name).to_not be_valid
    end

    it 'is not valid when last name is nil' do
      expect(new_user.last_name).to_not be_valid
    end

    it 'is not valid when address is nil' do
      expect(new_user.address).to_not be_valid
    end

    it 'is not valid when email is nil' do
      expect(new_user.email).to_not be_valid
    end

    it 'is not valid when staff is nil' do
      expect(new_user.staff).to_not be_valid
    end
  end

  context 'when email format is invalid' do
    it 'is not valid when the email is incorrectly formatted' do
      let(:email) { "Test@test" }
      expect(email).to_not be_valid
    end
  end

  context 'when length validations are in place' do
    let(:first_name) do
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean mo"
    end

    let(:last_name) do
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean mo"
    end

    it 'is invalid when first name has more than 100 characters' do
      expect(first_name).to_not be_valid
    end

    it 'is invalid when last name has more than 100 characters' do
      expect(last_name).to_not be valid
    end
  end
end
