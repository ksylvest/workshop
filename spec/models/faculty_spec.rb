require "rails_helper"

RSpec.describe Faculty do
  subject { build(:faculty) }

  it { is_expected.to belong_to(:school) }
  it { is_expected.to have_many(:appointments) }
  it { is_expected.to validate_presence_of(:name) }
  it { is_expected.to validate_uniqueness_of(:name).scoped_to(:school_id) }
end
