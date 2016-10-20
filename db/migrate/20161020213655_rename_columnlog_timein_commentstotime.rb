class RenameColumnlogTimeinCommentstotime < ActiveRecord::Migration[5.0]
  def change
    rename_column :comments, :log_time, :time
  end
end
