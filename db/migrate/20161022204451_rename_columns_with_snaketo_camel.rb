class RenameColumnsWithSnaketoCamel < ActiveRecord::Migration[5.0]
  def change
    rename_column :comments, :speech_id, :speechId
    rename_column :comments, :user_id, :userId
    rename_column :speeches, :user_id, :userId
  end
end
