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
  });

  return (
    <div>
      <ul>
        {loadingManufacturers === true ?
          'Loading...' :
          manufacturers.map(manufacturer => (
            <li key={manufacturer.Mfr_ID}>{manufacturer.Mfr_CommonName}</li>
          ))
        }
      </ul>
    </div>
  );
}