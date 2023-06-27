class CreateAppointments < ActiveRecord::Migration[7.0]
  def change
    create_table :appointments, id: :uuid do |t|
      t.references :student, null: false, foreign_key: true, index: true, type: :uuid
      t.references :school, null: false, foreign_key: true, index: true, type: :uuid
      t.references :faculty, null: false, foreign_key: true, index: true, type: :uuid
      t.references :course, null: false, foreign_key: true, index: true, type: :uuid
      t.string :reason

      t.timestamps
    end
  end
end
