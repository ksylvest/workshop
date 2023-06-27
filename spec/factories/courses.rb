FactoryBot.define do
  factory :course do
    school
    sequence(:name) { |i| "Course #{i}" }
  end
end
