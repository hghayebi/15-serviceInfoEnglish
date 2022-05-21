import "./sub-services.scss";
import "./sub-services-small-screen.scss";

// import linkIcon from "../../icon/link-icon.png";
// import detailsIcon from "../../icon/details-icon.png";

const mediaQueryLessthan640 = window.matchMedia("(max-width: 640px)");
const mediaQueryGreaterthan640 = window.matchMedia("(min-width: 641px)");

export default class SubServices {
  constructor(serviceContainer) {
    this.serviceContainer = serviceContainer;
  }

  render(SubServicesData = []) {
    //
    // const serviceContainer = document.querySelector(".ho-service-container");

    const subServicesContainer = document.createElement("div");
    subServicesContainer.classList.add("ho-sub-services");
    subServicesContainer.classList.add("collapsible");

    this.serviceContainer.appendChild(subServicesContainer);

    // service details heading --------------------------------------------

    let subServiceContainer = document.createElement("div");
    subServiceContainer.classList.add("ho-sub-service");
    subServiceContainer.classList.add("ho-sub-heading");

    let subServicenamediv = document.createElement("div");
    subServicenamediv.classList.add("ho-sub-service__name--container");
    let subServicename = document.createElement("p");
    subServicename.classList.add("ho-sub-service__name");
    subServicename.classList.add("ho-sub-service--heading");
    subServicename.innerText = "Service Title";
    subServicenamediv.appendChild(subServicename);

    let subServicenCodeDiv = document.createElement("div");
    subServicenCodeDiv.classList.add("ho-sub-service__code--container");
    let subServicenCode = document.createElement("p");
    subServicenCode.classList.add("ho-sub-service__code");
    subServicenCode.classList.add("ho-sub-service--heading");
    subServicenCode.innerText = "Service Code";
    subServicenCodeDiv.appendChild(subServicenCode);

    let subserviceLinkDiv = document.createElement("div");
    subserviceLinkDiv.classList.add("ho-sub-service__link--container");
    // let subserviceLinkIcon = document.createElement("img");
    // subserviceLinkIcon.src = linkIcon;
    let subserviceLink = document.createElement("p");
    subserviceLink.classList.add("ho-sub-service__link");
    subserviceLink.classList.add("ho-sub-service--heading");
    subserviceLink.innerText = "Link to Service";
    // subserviceLink.target = "_blank";
    // subserviceLink.appendChild(subserviceLinkIcon);
    subserviceLinkDiv.appendChild(subserviceLink);

    let subserviceDetailsLinkDiv = document.createElement("div");
    subserviceDetailsLinkDiv.classList.add(
      "ho-sub-service__details--link--container"
    );
    // let subserviceDetailsLinkIcon = document.createElement("img");
    // subserviceDetailsLinkIcon.src = detailsIcon;
    let subserviceDetailsLink = document.createElement("p");
    subserviceDetailsLink.classList.add("ho-sub-service__details--link");
    subserviceDetailsLink.classList.add("ho-sub-service--heading");
    subserviceDetailsLink.innerText = "Service Details";
    // subserviceDetailsLink.appendChild(subserviceDetailsLinkIcon);
    subserviceDetailsLinkDiv.appendChild(subserviceDetailsLink);

    subServiceContainer.appendChild(subServicenamediv);
    subServiceContainer.appendChild(subServicenCodeDiv);
    subServiceContainer.appendChild(subserviceLinkDiv);
    subServiceContainer.appendChild(subserviceDetailsLinkDiv);

    subServicesContainer.appendChild(subServiceContainer);
    // service details heading --------------------------------------------

    // ------------------

    SubServicesData.forEach((obj) => {
      let subServiceContainer = document.createElement("div");
      subServiceContainer.classList.add("ho-sub-service");

      let subServicenamediv = document.createElement("div");
      subServicenamediv.classList.add("ho-sub-service__name--container");
      let subServicename = document.createElement("p");
      subServicename.classList.add("ho-sub-service__name");
      subServicename.innerText = obj.subService;
      subServicenamediv.appendChild(subServicename);

      let subServicenCodeDiv = document.createElement("div");
      subServicenCodeDiv.classList.add("ho-sub-service__code--container");
      let subServicenCode = document.createElement("p");
      subServicenCode.classList.add("ho-sub-service__code");
      subServicenCode.innerText = obj.serviceCode;
      subServicenCodeDiv.appendChild(subServicenCode);

      let subserviceLinkDiv = document.createElement("div");
      subserviceLinkDiv.classList.add("ho-sub-service__link--container");
      let subserviceLinkIcon = document.createElement("img");
      // subserviceLinkIcon.src = linkIcon;
      subserviceLinkIcon.src =
        "https://aped.ir/Dorsapax/Data/Sub_0/File/linkIcon.png";
      // subserviceLinkIcon.width = "30";
      let subserviceLink = document.createElement("a");
      subserviceLink.classList.add("ho-sub-service__link");
      subserviceLink.href = obj.serviceLink;
      subserviceLink.target = "_blank";
      subserviceLink.appendChild(subserviceLinkIcon);
      subserviceLinkDiv.appendChild(subserviceLink);

      let subserviceDetailsLinkDiv = document.createElement("div");
      subserviceDetailsLinkDiv.classList.add(
        "ho-sub-service__details--link--container"
      );

      let subserviceDetailsLinkIcon = document.createElement("img");
      // subserviceDetailsLinkIcon.src = detailsIcon;
      subserviceDetailsLinkIcon.src =
        "https://aped.ir/Dorsapax/Data/Sub_0/File/detailesIcon.png";
      subserviceDetailsLinkIcon.width = "30";
      let subserviceDetailsLink = document.createElement("a");
      subserviceDetailsLink.classList.add("ho-sub-service__details--link");
      subserviceDetailsLink.href = obj.serviceDetailsLink || "#";
      subserviceDetailsLink.target = "_blank";
      subserviceDetailsLink.appendChild(subserviceDetailsLinkIcon);
      subserviceDetailsLinkDiv.appendChild(subserviceDetailsLink);

      subServiceContainer.appendChild(subServicenamediv);
      subServiceContainer.appendChild(subServicenCodeDiv);
      subServiceContainer.appendChild(subserviceLinkDiv);
      subServiceContainer.appendChild(subserviceDetailsLinkDiv);

      subServicesContainer.appendChild(subServiceContainer);

      // handle small screens----------start

      function handleMediaQueryLessThan640(e) {
        console.log(e.matches);
        if (e.matches) {
          subServicenCodeDiv.classList.add("hidden");
          subserviceLinkDiv.classList.add("hidden");
          subserviceDetailsLinkDiv.classList.add("hidden");

          // ------

          const t001 = `<div class="ho-ionicon ho-ionicon--remove-circle ho-hidden">
    
<svg xmlns="http://www.w3.org/2000/svg" class="ionicon  ho-ionicon--remove-circle " viewBox="0 0 512 512"><title>Remove Circle</title><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm80 224H176a16 16 0 010-32h160a16 16 0 010 32z"/></svg>

</div>

<div class="ho-ionicon ho-ionicon--add-circle">

<svg xmlns="http://www.w3.org/2000/svg" class="ionicon  ho-ionicon--add-circle" viewBox="0 0 512 512"><title>Add Circle</title><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm80 224h-64v64a16 16 0 01-32 0v-64h-64a16 16 0 010-32h64v-64a16 16 0 0132 0v64h64a16 16 0 010 32z"/></svg>

</div>`;

          let plusMinesCircle = document.createElement("div");
          plusMinesCircle.innerHTML = t001;
          // -----------

          subServicenamediv.prepend(plusMinesCircle);

          subServicenamediv.addEventListener("click", function () {
            subServicenCodeDiv.classList.toggle("hidden");
            subserviceLinkDiv.classList.toggle("hidden");
            subserviceDetailsLinkDiv.classList.toggle("hidden");

            subServicenamediv.classList.toggle("ho-sub-service--main-color");
            subServicenamediv
              .querySelectorAll(".ho-ionicon")
              .forEach((elem) => {
                // console.log(elem);
                elem.classList.toggle("ho-fill-white");
                elem.classList.toggle("ho-hidden");
              });
          });
        }
      }

      mediaQueryLessthan640.addEventListener(
        "change",
        handleMediaQueryLessThan640
      );
      handleMediaQueryLessThan640(mediaQueryLessthan640);

      // handle small screens----------end
    });

    // hidden class
    subServicesContainer.classList.add("collapsed");
    // subServicesContainer.querySelector
    this.serviceContainer
      .querySelector(".ho-service-main")
      .addEventListener("click", function (e) {
        const content = document.querySelector(".collapsible");
        expandElement(subServicesContainer, "collapsed");
      });
  }
}

// handle normal screens----------start
function handleMediaQueryGreaterThan640(e) {
  window.location.reload();
}

mediaQueryGreaterthan640.addEventListener(
  "change",
  handleMediaQueryGreaterThan640
);
// handle normal screens----------end
// ------------------------------------------------

function expandElement(elem, collapseClass) {
  // debugger;
  elem.style.height = "";
  elem.style.transition = "none";

  const startHeight = window.getComputedStyle(elem).height;

  // Remove the collapse class, and force a layout calculation to get the final height
  elem.classList.toggle(collapseClass);
  const height = window.getComputedStyle(elem).height;

  // Set the start height to begin the transition
  elem.style.height = startHeight;

  // wait until the next frame so that everything has time to update before starting the transition
  requestAnimationFrame(() => {
    elem.style.transition = "";

    requestAnimationFrame(() => {
      elem.style.height = height;
    });
  });

  // Clear the saved height values after the transition
  elem.addEventListener("transitionend", function temp() {
    elem.style.height = "";
    // elem.removeEventListener("transitionend", arguments.callee);
    elem.removeEventListener("transitionend", temp);
  });
}
