school = School.find_or_create_by!(name: "SFU")
student = Student.find_or_create_by!(name: "Carl Gauss")

school.users.find_or_create_by!(school:, email: "leonhard.euler@sfu.ca", name: "Leonhard Euler") do |user|
  user.password = SecureRandom.alphanumeric
end

school.faculties.find_or_create_by!(name: "Math")
school.faculties.find_or_create_by!(name: "History")
school.faculties.find_or_create_by!(name: "Science")
school.courses.find_or_create_by!(name: "Math 101")
school.courses.find_or_create_by!(name: "Math 102")
school.courses.find_or_create_by!(name: "History 101")
school.courses.find_or_create_by!(name: "History 102")
school.courses.find_or_create_by!(name: "Science 101")
school.courses.find_or_create_by!(name: "Science 102")

Faculty.all.each do |faculty|
  Course.all.each do |course|
    school.appointments.find_or_create_by!(student:, course:, faculty:)
  end
end
