import React, { useState, useEffect } from "react";
import Api from "../../helper/Api"

export default function FavoriteManufacturers() {
  const api = new Api();
  const [favoriteManufacturers, setFavoriteManufacturers] = useState([]);
  const [loadingFavoriteManufacturers, setLoadingFavoriteManufacturers] = useState(true);

  useEffect(() => {
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
    <>
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
    </>
  );
}
