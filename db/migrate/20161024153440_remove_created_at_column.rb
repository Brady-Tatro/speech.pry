class RemoveCreatedAtColumn < ActiveRecord::Migration[5.0]
  def change
    remove_column :comments, :created_at, null: false
    remove_column :comments, :updated_at, null: false 
  end
end
