
import Country from "./countryClass.js";

import { declareEvents } from "./events.js";

const init = () => {
  declareEvents();
};

export const doApi = async(url) => {

  fetch(url)
    .then((resp) => {
      if (!resp.ok) {
        throw new Error(`Failed to fetch data. Status: ${resp.status}`);
      }
      return resp.json();
    })
    .then((data) => {
      console.log(data);
      createCountry(data[0]);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      // Handle the error here, for example, display an error message to the user.
    });
};

export const doApi2 = async (url) => {
  return fetch(url)
    .then((resp) => {
      if (!resp.ok) {
        throw new Error(`Failed to fetch data. Status: ${resp.status}`);
      }
      return resp.json();
    })
    .then((data) => {
      console.log(data);
      return data[0]; // Return the fetched data
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      // Handle the error here, for example, display an error message to the user.
      throw error; // Re-throw the error to propagate it further if needed
    });
};

const createCountry = (data) => {
  let country = new Country("#id_parent", data);
  country.render();

}
// יציג את הטעינה ויסתיר את הרשימה
/*const showLoading = () => {
    document.querySelector("#id_loading").style.display = "block";
    document.querySelector("#id_row").style.display = "none";
  }
  // יסתיר את הטעינה ויציג את הרשימה אחרי שהבקשה התקבלה
  const hideLoading = () => {
    document.querySelector("#id_loading").style.display = "none";
    document.querySelector("#id_row").style.display = "flex";
  }*/

init();
