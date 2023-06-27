module Types
  class AppointmentType < BaseObject
    field :id, ID, null: false

    field :course, CourseType, null: false
    field :faculty, FacultyType, null: false
    field :student, StudentType, null: false

    def course
      dataloader
        .with(GraphQL::Sources::ActiveRecordObject, Course, key: :id)
        .load(object.course_id)
    end

    def faculty
      dataloader
        .with(GraphQL::Sources::ActiveRecordObject, Faculty, key: :id)
        .load(object.faculty_id)
    end

    def student
      dataloader
        .with(GraphQL::Sources::ActiveRecordObject, Student, key: :id)
        .load(object.student_id)
    end
  end
end
