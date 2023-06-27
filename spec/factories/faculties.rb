FactoryBot.define do
  factory :faculty do
    school
    sequence(:name) { |i| "Faculty #{i}" }
  end
end
