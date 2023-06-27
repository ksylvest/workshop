FactoryBot.define do
  factory :school do
    sequence(:name) { |index| "School #{index}" }
  end
end
