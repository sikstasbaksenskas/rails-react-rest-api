import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFavoriteManufacturers } from "../../../redux/actions/favoriteManufacturersAction";

export default function FavoriteManufacturers() {
  const [loadingFavoriteManufacturers, setLoadingFavoriteManufacturers] = useState(true);
  const favoriteManufacturers = useSelector((state) => state.favoriteManufacturers.favoriteManufacturers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavoriteManufacturers()).then((response) => {
      setLoadingFavoriteManufacturers(false);
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
                        <button className="btn btn-secondary mr-1">Edit</button>
                        <button className="btn btn-secondary">Delete</button>
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
