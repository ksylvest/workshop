module Types
  class AuthenticationType < BaseObject
    field :id, ID, null: false
    field :ip, String, null: false
    field :user, MeType, null: false

    def course
      dataloader
        .with(GraphQL::Sources::ActiveRecordObject, User, key: :id)
        .load(object.user_id)
    end
  end
end
