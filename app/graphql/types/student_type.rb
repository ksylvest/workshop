module Types
  class StudentType < BaseObject
    field :id, ID, null: false
    field :name, String, null: false
  end
end
