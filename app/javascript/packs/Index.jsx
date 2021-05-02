// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Store from "../redux/Store";
import Home from "./components/Home";

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Provider store={Store}>
      <Home />
    </Provider>,
    document.body.appendChild(document.getElementById("main"))
  );
});
