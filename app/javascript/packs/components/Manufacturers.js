import React, { useState, useEffect } from "react";
import Api from "../helper/Api"

export default function Manufacturers() {
  const api = new Api();
  const [manufacturers, setManufacturers] = useState([]);
  const [loadingManufacturers, setLoadingManufacturers] = useState(true);

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
  }, []);

  return (

    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h3>Manufacturers</h3>
          {loadingManufacturers === true ?
            "Loading" :
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
          Temp
        </div>
      </div>
    </div>
  );
}