
class FavoriteManufacturer < ApplicationRecord
  validates :name, presence: true
  validates :name, uniqueness: { scope: :manufacturer_id } 
end