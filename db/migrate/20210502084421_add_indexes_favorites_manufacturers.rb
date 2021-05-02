class AddIndexesFavoritesManufacturers < ActiveRecord::Migration[6.1]
  def change
    add_index :favorite_manufacturers, [:name, :manufacturer_id], unique: true
  end
end
