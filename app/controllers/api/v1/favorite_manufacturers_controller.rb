class Api::V1::FavoriteManufacturersController < ApplicationController
  before_action :find_manufacturer

  def index
    render json: FavoriteManufacturer.all.order(created_at: :asc)
  end

  def create
    favorite_manufacturer = FavoriteManufacturer.new favorite_manufacturer_params
    if favorite_manufacturer.save
      render json: favorite_manufacturer
    else
      render json: favorite_manufacturer.errors, status: :unprocessable_entity
    end
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
    params.require(:favorite_manufacturer).permit!
  end

  def find_manufacturer
    @favorite_manufacturer = FavoriteManufacturer.find(params[:id]) if params[:id]
  end
end
