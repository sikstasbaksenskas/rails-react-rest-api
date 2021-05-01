class CreateFavoriteManufacturers < ActiveRecord::Migration[6.1]
  def change
    create_table :favorite_manufacturers do |t|
      t.string :name
      t.string :manufacturer_id
      
      t.timestamps
    end
  end
end
