import * as axios from "axios";

export default class Api {
  constructor() {
    this.api_url = "https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers?format=json";
  }

  init = () => {
    let headers = {
      Accept: "application/json",
    };

    this.client = axios.create({
      baseURL: this.api_url,
      headers: headers,
    });

    return this.client;
  };

  getAllManufacturers = () => {
    return this.init().get("");
  };
}
