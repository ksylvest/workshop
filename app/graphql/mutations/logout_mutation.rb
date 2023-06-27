module Mutations
  class LogoutMutation < BaseMutation
    field :authentication, Types::AuthenticationType, null: true

    def resolve
      Current.logout!
      { authentication: nil }
    end
  end
end
