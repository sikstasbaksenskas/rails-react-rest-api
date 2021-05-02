import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createFavoriteManufacturer } from "../../redux/actions/favoriteManufacturersAction";

export default function Manufacturer({ manufacturer }) {
  const dispatch = useDispatch();
  const [name, setName] = useState(manufacturer.Mfr_CommonName);
  const [id, setId] = useState(manufacturer.Mfr_ID);

  const addToFavorites = () => {
    dispatch(createFavoriteManufacturer(name, id)).then((response) => {
      if (!response.success) {
        alert(response.error)
      }
    })
  }

  return (
    <tr>
      <td>{name}</td>
      <td>{id}</td>
      <td>
        <button
          onClick={() => addToFavorites()}
          className="btn btn-secondary"
        >
          Add to favorites
        </button>
      </td>
    </tr>
  );
}
