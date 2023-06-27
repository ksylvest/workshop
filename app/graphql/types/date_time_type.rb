module Types
  class DateTimeType < GraphQL::Types::ISO8601DateTime
    description "A standardized date/time."
  end
end
