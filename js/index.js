import { getInfoDengueData } from "./service.js";

getInfoDengueData()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
