require "rails_helper"

RSpec.describe Authentication do
  subject { build(:authentication) }

  it { is_expected.to belong_to(:user) }
  it { is_expected.to validate_presence_of(:ip) }
end
