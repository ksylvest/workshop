FactoryBot.define do
  factory :user do
    school
    sequence(:name) { |i| "User #{i}" }
    sequence(:email) { |i| "user-#{i}@sfu.ca" }
  end
end
