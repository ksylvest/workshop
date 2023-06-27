class CreateAuthentications < ActiveRecord::Migration[7.0]
  def change
    create_table :authentications, id: :uuid do |t|
      t.references :user, null: false, foreign_key: true, type: :uuid
      t.inet :ip, null: false

      t.timestamp :deleted_at
      t.timestamps
    end
  end
end
