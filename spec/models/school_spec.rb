require "rails_helper"

RSpec.describe School do
  subject { build(:school) }

  it { is_expected.to have_many(:appointments) }
  it { is_expected.to have_many(:courses) }
  it { is_expected.to have_many(:faculties) }
  it { is_expected.to validate_presence_of(:name) }
  it { is_expected.to validate_uniqueness_of(:name) }
end
