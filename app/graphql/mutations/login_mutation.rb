module Mutations
  class LoginMutation < BaseMutation
    argument :input, ::Types::LoginInput, required: true

    field :authentication, Types::AuthenticationType, null: true
    field :error, String, null: true

    def resolve(input:)
      user = User.authenticate_by(email: input.email, password: input.password)

      if user
        { authentication: Current.login!(user) }
      else
        { error: "Incorrect username or password." }
      end
    end
  end
end
