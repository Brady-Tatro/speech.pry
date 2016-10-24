class ChangeColumnNamesBack < ActiveRecord::Migration[5.0]
  def change
    rename_column :speeches, :userId, :user_id
  end
end
