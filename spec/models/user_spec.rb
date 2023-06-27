require "rails_helper"

RSpec.describe User do
  subject { build(:user) }

  it { is_expected.to belong_to(:school) }
  it { is_expected.to validate_presence_of(:name) }
  it { is_expected.to validate_presence_of(:email) }
  it { is_expected.to validate_uniqueness_of(:email) }
  it { is_expected.not_to allow_value("user").for(:email) }
  it { is_expected.not_to allow_value("@host.com").for(:email) }
  it { is_expected.to allow_value("user@host.com").for(:email) }
  it { is_expected.to have_secure_password }

  describe ".authenticate_by" do
    subject(:result) { described_class.authenticate_by(email:, password:) }

    let!(:user) { create(:user, email: "user@host.com", password: "password") }

    context "with a correct email and a correct password" do
      let(:email) { "user@host.com" }
      let(:password) { "password" }

      it { expect(result).to eql(user) }
    end

    context "with a correct email and an incorrect password" do
      let(:email) { "user@host.com" }
      let(:password) { "wordpass" }

      it { expect(result).to be_nil }
    end

    context "with an incorrect email and a correct password" do
      let(:email) { "host@user.com" }
      let(:password) { "password" }

      it { expect(result).to be_nil }
    end

    context "with an incorrect email and an incorect password" do
      let(:email) { "host@user.com" }
      let(:password) { "wordpass" }

      it { expect(result).to be_nil }
    end
  end
end
