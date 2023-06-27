class User < ApplicationRecord
  belongs_to :school
  has_many :authentications, dependent: :destroy

  validates :name, presence: true
  validates :email, presence: true
  validates :email, uniqueness: true, if: -> { email.present? }
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }, if: -> { email.present? }

  has_secure_password

  def self.authenticate_by(email:, password:)
    if (user = find_by(email:))
      user if user.authenticate(password)
    else
      new(password:)
      nil
    end
  end
end
