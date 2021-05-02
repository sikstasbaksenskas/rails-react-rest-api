const initialState = {
  favoriteManufacturers: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "GET_FAVORITE_MANUFACTURERS":
      return {
        ...state,
        favoriteManufacturers: action.payload,
      };
    case "CREATE_FAVORITE_MANUFACTURER":
      let newFavoriteManufacturers = [...state.favoriteManufacturers];
      newFavoriteManufacturers.push(action.payload);
      return {
        ...state,
        favoriteManufacturers: newFavoriteManufacturers
      };
    case "UPDATE_MANUFACTURER":
      let updatedManufacturers = [...state.favoriteManufacturers];
      const updateElementId = element => element.id === action.payload.id;
      const findIndex = updatedManufacturers.findIndex(updateElementId);
      updatedManufacturers[findIndex] = action.payload;
      return {
        ...state,
        favoriteManufacturers: updatedManufacturers
      };
    case "DELETE_MANUFACTURER":
      return {
        ...state,
        favoriteManufacturers: [...state.favoriteManufacturers].filter(
          (manufacturer) => manufacturer.id !== action.payload
        ),
      };
    default:
      return state;
  }
}
