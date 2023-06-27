class Student < ApplicationRecord
  has_many :appointments, dependent: :destroy

  validates :name, presence: true
end
