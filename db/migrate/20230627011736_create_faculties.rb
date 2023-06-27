class CreateFaculties < ActiveRecord::Migration[7.0]
  def change
    create_table :faculties, id: :uuid do |t|
      t.references :school, null: false, index: true, foreign_key: true, type: :uuid
      t.string :name, null: false

      t.timestamps

      t.index %i[school_id name], unique: true
    end
  end
end
