class ApplicationController < ActionController::Base
  before_action do
    Current.ip = request.ip
    Current.cookies = cookies
  end
end
