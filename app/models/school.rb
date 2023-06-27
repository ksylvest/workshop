class School < ApplicationRecord
  has_many :appointments, dependent: :destroy
  has_many :courses, dependent: :destroy
  has_many :faculties, dependent: :destroy
  has_many :users, dependent: :destroy

  validates :name, presence: true
  validates :name, uniqueness: true, if: -> { name.present? }
end
