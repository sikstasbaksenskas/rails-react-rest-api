class ChangeManufacturerId < ActiveRecord::Migration[6.1]
  def change
    change_column :favorite_manufacturers, :manufacturer_id, :integer
  end
end
