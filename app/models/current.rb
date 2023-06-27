class Current < ActiveSupport::CurrentAttributes
  attribute :ip
  attribute :cookies

  def login!(user)
    authentication = user.authentications.new(ip:)
    authentication.save!
    cookies.permanent.encrypted[:authentication_id] = authentication.id if cookies
    authentication
  end

  def logout!
    cookies&.delete(:authentication_id)
  end

  def authentication
    authentication_id = cookies.permanent.encrypted[:authentication_id]
    Authentication.find(authentication_id) if authentication_id
  end
end
