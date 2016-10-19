class CreateSpeech < ActiveRecord::Migration[5.0]
  def change
    create_table :speeches do |t|
      t.string :title, null: false
      t.string :media, null: false
      t.string :description
      t.datetime :created_at, null: false
      t.datetime :updated_at, null: false
      t.belongs_to :user

      t.datetime
    end
  end
end
