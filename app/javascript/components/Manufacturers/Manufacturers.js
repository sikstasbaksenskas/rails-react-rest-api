import React, { useState, useEffect } from "react";
import Manufacturer from "./Manufacturer";
import Api from "../../packs/helper/Api";

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
    <>
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
                .map((manufacturer, index) => (
                  <Manufacturer key={index} manufacturer={manufacturer} />
                ))
            }
          </tbody>
        </table>
      }
    </>
  );
}
