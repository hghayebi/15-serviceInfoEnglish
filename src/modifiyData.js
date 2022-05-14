const fs = require("fs");
const path = require("path");

const data = require("./data/data0.json");

const modifiedObj = {};
let serviceMainList = [];
Object.entries(data).forEach((item) => {
  // console.log(item);
  serviceMainList.push(item[1].mainService);
});

serviceMainList = [...new Set(serviceMainList)];
// console.log(serviceMainList);
serviceMainList.forEach((item) => {
  modifiedObj[item] = [];
});

// console.log(modifiedObj);

serviceMainList.forEach((sMain) => {
  Object.entries(data).forEach((item) => {
    // console.log(item);
    serviceMainList.push(item[1].mainService);

    if (sMain == item[1].mainService) {
      modifiedObj[sMain].push(data[item[0]]);
    }
  });
});
console.log(modifiedObj);

fs.writeFileSync(
  path.join(__dirname, "data", "modifiedData.json"),
  JSON.stringify(modifiedObj)
);
