FactoryBot.define do
  factory :appointment do
    school
    student
    faculty
    course
    reason { "Assistance w/ Math!" }
  end
end
