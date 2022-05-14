const {
  default: MainService,
} = require("./components/main-service/main-service");

import SubServices from "./components/sub-services/sub-services";
import data from "./data/modifiedData.json";

import "./main.scss";

// service container ----------------------------------start
const hoMainContainer = document.querySelector(".ho-main-container");
// const serviceContainer = document.createElement("div");
// serviceContainer.classList.add("ho-service-container");
// body.appendChild(serviceContainer);

// service container ----------------------------------end

// servic main -------------------------------start
// const serviceMain = new MainService();
// serviceMain.render();
// servic main -------------------------------ened

// console.log(data);
// console.log(typeof data);

Object.entries(data).forEach((obj) => {
  let serviceContainer = document.createElement("div");
  serviceContainer.classList.add("ho-service-container");
  hoMainContainer.appendChild(serviceContainer);

  // main service
  let serviceMain = new MainService(serviceContainer);
  serviceMain.render(obj[0]);
  // serviceContainer.appendChild(document.querySelector(".ho-service-main"));

  // sub service
  let subServices = new SubServices(serviceContainer);
  subServices.render(obj[1]);
  // serviceContainer.appendChild(document.querySelector("."));

  // console.log(obj);
});
