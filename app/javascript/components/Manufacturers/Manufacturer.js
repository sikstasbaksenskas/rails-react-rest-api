import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createFavoriteManufacturer } from "../../redux/actions/favoriteManufacturersAction";

export default function Manufacturer({ manufacturer }) {
  const dispatch = useDispatch();
  const name = useState(manufacturer.Mfr_CommonName);
  const id = useState(manufacturer.Mfr_ID);
  
  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{id}</td>
        <td>
          <button 
            className="btn btn-secondary" 
            onClick={() => dispatch(createFavoriteManufacturer(name[0], id[0]))}>
              Add to favorites
          </button>
        </td>
      </tr>
    </>
  );
}
