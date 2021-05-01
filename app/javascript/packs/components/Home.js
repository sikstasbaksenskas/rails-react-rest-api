import React from "react";
import Manufacturers from "./Manufacturers/Manufacturers";
import FavoriteManufacturers from "./FavoriteManufacturers/FavoriteManufacturers";

export default function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <Manufacturers />
        </div>
        <div className="col-md-6">
          <FavoriteManufacturers />
        </div>
      </div>
    </div>
  );
}
