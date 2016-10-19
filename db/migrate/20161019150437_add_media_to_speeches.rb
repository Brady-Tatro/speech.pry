class AddMediaToSpeeches < ActiveRecord::Migration[5.0]
  def change
    add_column :speeches, :media, :string, null: false
  end
end
