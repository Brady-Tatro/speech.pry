class CreateComments < ActiveRecord::Migration[5.0]
  def change
    create_table :comments do |t|
      t.string :log_time, null: false
      t.string :comment
      t.belongs_to :user, null: false
      t.belongs_to :speech, null: false

      t.timestamps
    end
  end
end
