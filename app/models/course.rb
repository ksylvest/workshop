class Course < ApplicationRecord
  belongs_to :school
  has_many :appointments, dependent: :destroy

  validates :name, presence: true
  validates :name, uniqueness: { if: :present?, scope: :school_id }
end
