import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteFavoriteManufacturer } from "../../redux/actions/favoriteManufacturersAction";

export default function FavoriteManufacturer({ manufacturer }) {
  const dispatch = useDispatch();
  const [id, setId] = useState(manufacturer.id)
  const [name, setName] = useState(manufacturer.name)
  const [manufacturer_id, setManufacturerId] = useState(manufacturer.manufacturer_id)

  return (
    <tr>
      <td>{name}</td>
      <td>{manufacturer_id}</td>
      <td>
        <button className="btn btn-secondary mr-1">Edit</button>
        <button
          className="btn btn-secondary"
          onClick={() => dispatch(deleteFavoriteManufacturer(id))}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
