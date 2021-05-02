import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteFavoriteManufacturer, updateFavoriteManufacturer } from "../../redux/actions/favoriteManufacturersAction";

export default function FavoriteManufacturer({ manufacturer }) {
  const dispatch = useDispatch();
  const [id, setId] = useState(manufacturer.id)
  const [name, setName] = useState(manufacturer.name)
  const [manufacturer_id, setManufacturerId] = useState(manufacturer.manufacturer_id)
  const [edit, setEdit] = useState(false);
  const [nameError, setNameError] = useState("");

  const cancelUpdate = () => {
    setEdit(false);
    setName(manufacturer.name)
    setNameError("");
  }

  const executeUpdate = () => {
    dispatch(updateFavoriteManufacturer(name, id)).then((response) => {
      if (response.success) {
        setEdit(false);
        setNameError("");
      } else {
        setNameError(response.error);
      }
    })
  }

  return (
    <tr>
      <td>
        {edit ?
          <>
            <input value={name} onChange={(e) => setName(e.target.value)} /> <br />
            <span style={{ fontSize: "12px", color: "red" }}>{nameError}</span>
          </>
          : name}
      </td>
      <td>{manufacturer_id}</td>
      <td>
        {edit ?
          <>
            <button className="btn btn-secondary mr-1" onClick={() => cancelUpdate()}>Cancel</button>
            <button className="btn btn-secondary" onClick={() => executeUpdate()}>Save</button>
          </> :
          <>
            <button className="btn btn-secondary mr-1" onClick={() => setEdit(true)}>Edit</button>
            <button className="btn btn-secondary" onClick={() => dispatch(deleteFavoriteManufacturer(id))}>Delete</button>
          </>
        }
      </td>
    </tr>
  );
}
