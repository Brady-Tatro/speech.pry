class ChangeSpeechonComments < ActiveRecord::Migration[5.0]
  def change
    rename_column :comments, :speechId, :speech_id

  end
end
