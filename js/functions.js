
import  {doApi,doApi2} from "./appAtlas.js";

let parent = document.querySelector("#id_parent");

export const getCountryByName =async (_name) => {
  parent.innerHTML = "";
  let url = `https://restcountries.com/v3.1/name/${_name}`;
  await doApi(url);
}

 export const getCountryByCode =async (_code) => {
  parent.innerHTML = "";
  let url = `https://restcountries.com/v3.1/alpha/${_code}`;
  await doApi(url);
}
export const getCountryName = async (_code) => {
  const parent = document.getElementById('id_parent');
  parent.innerHTML = "";

  try {
    let url = `https://restcountries.com/v3.1/alpha/${_code}`;
    const result = await doApi2(url);

    
    // Assuming doApi returns some data you want to extract
    const countryName = result?.name?.common || "Unknown";

    return countryName;
  } catch (error) {
    console.error("Error fetching country data:", error);
    return "Unknown";
  }
}









