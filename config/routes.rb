Rails.application.routes.draw do
  post "/graphql", to: "graphql#execute"

  root to: "main#index"

  %w[
    /admin
    /admin/appointments
    /admin/appointments/new
    /admin/courses
    /admin/courses/new
    /admin/faculties
    /admin/faculties/new
    /admin/users
    /admin/users/new
    /login
    /signup
  ].each do |path|
    get path, to: "main#index"
  end
end
