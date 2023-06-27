class Faculty < ApplicationRecord
  belongs_to :school
  has_many :appointments, dependent: :destroy

  validates :name, presence: true
  validates :name, uniqueness: { scope: :school_id }, if: -> { name.present? }
end
