class Authentication < ApplicationRecord
  belongs_to :user

  validates :ip, presence: true

  scope :active, -> { where(deleted_at: nil) }
end
