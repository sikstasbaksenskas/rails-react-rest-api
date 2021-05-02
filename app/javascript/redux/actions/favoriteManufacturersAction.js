import Axios from "axios";

export const getFavoriteManufacturers = () => async (dispatch) => {
  try {
    const { data } = await Axios.get("api/v1/favorite_manufacturers");
    dispatch({
      type: "GET_FAVORITE_MANUFACTURERS",
      payload: data,
    });
    return { success: true }
  } catch (e) {
    return { success: true }
  }
};

export const createFavoriteManufacturer = (name, manufacturer_id) => async (dispatch) => {
  const params = {
    favorite_manufacturer: {
      name: name,
      manufacturer_id: manufacturer_id,
    }
  }

  try {
    const { data } = await Axios.post(`api/v1/favorite_manufacturers`, params);
    dispatch({
      type: "CREATE_FAVORITE_MANUFACTURER",
      payload: data,
    });
    return { success: true}
  } catch (e) {
    return { success: false}
  }
}

export const deleteFavoriteManufacturer = (id) => async (dispatch) => {
  if (confirm("Delete this manufacturer?")) {
    try {
      const { data } = await Axios.delete(`api/v1/favorite_manufacturers/${id}`);
      dispatch({
        type: "DELETE_MANUFACTURER",
        payload: id,
      });
      return { success: true }
    } catch (e) {
      return { success: false }
    }
  }
};

export const updateFavoriteManufacturer = (name, id) => async (dispatch) => {
  try {
    const { data } = await Axios.put(`api/v1/favorite_manufacturers/${id}`, { favorite_manufacturer: { name: name } });
    dispatch({
      type: "UPDATE_MANUFACTURER",
      payload: data,
    });
    return { success: true }
  } catch (e) {
    return { success: false, error: e.response.data.name[0] }
  }
}
