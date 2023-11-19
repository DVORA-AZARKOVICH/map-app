import  {getCountryByName,getCountryByCode,} from "./functions.js";

export const declareEvents = () => {
  let search_btn = document.querySelector("#search_btn");
  let id_input = document.querySelector("#id_input");
  let id_israel = document.querySelector("#id_israel");
  let id_USA = document.querySelector("#id_USA");
  let id_France = document.querySelector("#id_France");
  let id_UK = document.querySelector("#id_UK");
  let id_thailand = document.querySelector("#id_thailand");
  
  let parent = document.querySelector("#id_parent");

  let code_Israel = "isr";
  let code_USA = "USA";
  let code_France = "fra";
  let code_UK = "gbr";
  let code_thailand = "tha";


  id_input.addEventListener("keydown",(e) => {
    console.log(e.key);
    if(e.key == "Enter"){
        getCountryByName(id_input.value);
    }
  })

  search_btn.addEventListener("click", () => {
    getCountryByName(id_input.value);
  })

  id_israel.addEventListener("click",()=>{
    getCountryByCode(code_Israel);
  })
  id_USA.addEventListener("click",()=>{
    getCountryByCode(code_USA);
  })
  id_France.addEventListener("click",()=>{
    getCountryByCode(code_France);
  })
  id_UK.addEventListener("click",()=>{
    getCountryByCode(code_UK);
  })
  id_thailand.addEventListener("click",()=>{
    getCountryByCode(code_thailand);
  })
}
