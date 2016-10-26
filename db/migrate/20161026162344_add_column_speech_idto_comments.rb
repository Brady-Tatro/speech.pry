class AddColumnSpeechIdtoComments < ActiveRecord::Migration[5.0]
  def change
    add_column :comments, :speechId, :integer 
  end
end
