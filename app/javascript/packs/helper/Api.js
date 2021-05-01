import * as axios from "axios";

export default class Api {
  constructor() {
    this.manufacturers_url = "https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers?format=json";
    this.local_base_api = "http://localhost:3000/api/v1";
  }

  createClient = (local_api) => {
    this.client = axios.create({
      baseURL: local_api === true ? this.local_base_api : this.manufacturers_url,
      headers: {
        Accept: "application/json",
      },
    });

    return this.client;
  }

  initManufacturers = () => {
    return this.createClient(false);
  };

  initLocalApi = () => {
    return this.createClient(true);
  }

  getAllManufacturers = () => {
    return this.initManufacturers().get("");
  };

  getAllFavoriteManufacturers = () => {
    return this.initLocalApi().get("/favorite_manufacturers");
  }
}
