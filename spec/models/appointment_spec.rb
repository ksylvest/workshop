require "rails_helper"

RSpec.describe Appointment do
  it { is_expected.to belong_to(:course) }
  it { is_expected.to belong_to(:faculty) }
  it { is_expected.to belong_to(:school) }
  it { is_expected.to belong_to(:student) }
end
