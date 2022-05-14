import "./main-service.scss";
import "./main-service-small-screen.scss";

export default class MainService {
  constructor(serviceContainer) {
    this.serviceContainer = serviceContainer;
  }

  render(serviceMaineName = "") {
    // const serviceContainer = document.querySelector(".ho-service-container");

    const serviceMainDiv = document.createElement("div");
    serviceMainDiv.classList.add("ho-service-main");

    this.serviceContainer.appendChild(serviceMainDiv);

    const serviceMainHeading = document.createElement("h2");
    serviceMainHeading.classList.add("ho-service-main__heading");
    // serviceMainHeading.innerText = serviceMaineName;
    // <i class="icon-arrows-circle-plus ho-icon-arrows-circle-plus"></i>
    serviceMainHeading.innerHTML = `

    <div class="ho-ionicon ho-ionicon--remove-circle ho-hidden">
    
    <svg xmlns="http://www.w3.org/2000/svg" class="ionicon  ho-ionicon--remove-circle " viewBox="0 0 512 512"><title>Remove Circle</title><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm80 224H176a16 16 0 010-32h160a16 16 0 010 32z"/></svg>

    </div>

    <div class="ho-ionicon ho-ionicon--add-circle">

    <svg xmlns="http://www.w3.org/2000/svg" class="ionicon  ho-ionicon--add-circle" viewBox="0 0 512 512"><title>Add Circle</title><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm80 224h-64v64a16 16 0 01-32 0v-64h-64a16 16 0 010-32h64v-64a16 16 0 0132 0v64h64a16 16 0 010 32z"/></svg>

    </div>
    
    
    <img width="24" class="ho-tavanir-logo" src="https://www.tavanir.org.ir/assets/images/tinyLogo.png"
      alt="tavanir-logo"><span>${serviceMaineName}</span>
    `;
    serviceMainDiv.appendChild(serviceMainHeading);

    const iconDiv = document.createElement("div");
    iconDiv.classList.add("ho-icon");

    iconDiv.innerHTML = `
      <svg class="" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"    width="24" height="24" viewBox="0 0 20 20">
        <path fill="#717171" d="M0 6c0-0.128 0.049-0.256 0.146-0.354 0.195-0.195 0.512-0.195 0.707 0l8.646 8.646 8.646-8.646c0.195-0.195 0.512-0.195 0.707 0s0.195 0.512 0 0.707l-9 9c-0.195 0.195-0.512 0.195-0.707 0l-9-9c-0.098-0.098-0.146-0.226-0.146-0.354z"></path>
    </svg>
        `;
    // serviceMainDiv.appendChild(iconDiv);

    // const serviceDetailsContainer = document.createElement("div");
    // serviceDetailsContainer.classList.add("service-details");
    // serviceContainer.appendChild(serviceDetailsContainer);

    serviceMainDiv.addEventListener("click", function (e) {
      serviceMainDiv.classList.toggle("ho-service-main--color");
      serviceMainDiv.querySelectorAll(".ho-ionicon").forEach((elem) => {
        // console.log(elem);
        elem.classList.toggle("ho-fill-white");
        elem.classList.toggle("ho-hidden");
      });
    });
  }
}
