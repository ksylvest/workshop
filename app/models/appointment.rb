class Appointment < ApplicationRecord
  belongs_to :course
  belongs_to :faculty
  belongs_to :school
  belongs_to :student
end
