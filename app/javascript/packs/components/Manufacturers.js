import React, { useState, useEffect } from "react";
import Api from "../helper/Api"

export default function Manufacturers() {
  const api = new Api();
  const [manufacturers, setManufacturers] = useState([]);
  const [favoriteManufacturers, setFavoriteManufacturers] = useState([]);
  const [loadingManufacturers, setLoadingManufacturers] = useState(true);
  const [loadingFavoriteManufacturers, setLoadingFavoriteManufacturers] = useState(true);

  useEffect(() => {
    api
      .getAllManufacturers()
      .then(response => {
        setManufacturers(response.data.Results)
        setLoadingManufacturers(false)
      })
      .catch(error => {
        console.log(error)
      });
    api
      .getAllFavoriteManufacturers()
      .then(response => {
        setFavoriteManufacturers(response.data)
        setLoadingFavoriteManufacturers(false)
      })
      .catch(error => {
        console.log(error)
      });
  }, []);

  return (

    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h3>Manufacturers</h3>
          {loadingManufacturers === true ?
            "Loading..." :
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>ID</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  manufacturers
                    .filter(manufacturer => manufacturer.Mfr_CommonName != null)
                    .sort((first, second) => first.Mfr_CommonName > second.Mfr_CommonName ? 1 : -1)
                    .map(manufacturer => (
                      <tr key={manufacturer.Mfr_ID}>
                        <td>{manufacturer.Mfr_CommonName}</td>
                        <td>{manufacturer.Mfr_ID}</td>
                        <td>
                          <button className="btn btn-secondary">Add to favorites</button>
                        </td>
                      </tr>
                    ))
                }
              </tbody>
            </table>
          }
        </div>
        <div className="col-md-6">
          <h3>Favorite Manufacturers</h3>
          {loadingFavoriteManufacturers === true ?
            "Loading..." :
            favoriteManufacturers.length === 0 ?
              "Not added yet!" :
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>ID</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    favoriteManufacturers
                      .map(manufacturer => (
                        <tr key={manufacturer.id}>
                          <td>{manufacturer.name}</td>
                          <td>{manufacturer.manufacturer_id}</td>
                          <td>
                            <button className="btn btn-secondary">Edit</button>
                          </td>
                        </tr>
                      ))
                  }
                </tbody>
              </table>
          }
        </div>
      </div>
    </div>
  );
}