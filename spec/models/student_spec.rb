require "rails_helper"

RSpec.describe Student do
  subject { build(:student) }

  it { is_expected.to have_many(:appointments) }
end
