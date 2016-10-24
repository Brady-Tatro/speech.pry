class RemoveUserBelongsToFromComments < ActiveRecord::Migration[5.0]
  def change
    remove_column :comments, :userId
  end
end
