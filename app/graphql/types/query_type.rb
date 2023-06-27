module Types
  class QueryType < BaseObject
    field :appointments, [AppointmentType], null: false
    field :courses, [CourseType], null: false
    field :faculties, [FacultyType], null: false
    field :users, [UserType], null: false

    def appointments
      Appointment.all
    end

    def courses
      Course.order(:name)
    end

    def faculties
      Faculty.order(:name)
    end

    def users
      User.order(:name)
    end
  end
end
