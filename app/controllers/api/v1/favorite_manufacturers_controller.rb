class Api::V1::FavoriteManufacturersController < ApplicationController
  before_action :find_manufacturer

  def index
    render json: FavoriteManufacturer.all
  end

  def update
    if @favorite_manufacturer.update_attributes favorite_manufacturer_params
      render json: @favorite_manufacturer
    else
      render json: @favorite_manufacturer.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @favorite_manufacturer.destroy
    render json: { success: true }
  end

  private

  def favorite_manufacturer_params
    params.require(:favorite_manufacturer).permit(:name)
  end

  def find_manufacturer
    @favorite_manufacturer = FavoriteManufacturer.find(params[:favorite_manufacturer_id]) if params[:favorite_manufacturer_id]
  end
end
