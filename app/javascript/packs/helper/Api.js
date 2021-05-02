import * as axios from "axios";

export default class Api {
  constructor() {
    this.manufacturers_url = "https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers?format=json";
  }

  createClient = () => {
    this.client = axios.create({
      baseURL: this.manufacturers_url,
      headers: {
        Accept: "application/json",
      },
    });

    return this.client;
  }

  init = () => {
    return this.createClient();
  };

  getAllManufacturers = () => {
    return this.init().get("");
  };
}
