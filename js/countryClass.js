import {
  getCountryByName,
  getCountryByCode,
  getCountryName,
} from "./functions.js";
export default class CountryClass {
  constructor(_parent, data) {
    //function to each country, PrevcountriesArr, GetCuntryByCode,GetCountryByName
    this.parent = _parent;

    this.name = data.name.common;
    this.pop = data.population.toLocaleString();
    this.code = data.car.cca3;
    this.capital = data.capital[0];
    //let codelower = String(this.code.toLowerCase());
    this.languages = data.languages;
    this.flag = data.flags.png;
    this.lat = data.latlng[0];
    this.lon = data.latlng[1];
    this.countryCode = data.cca3;
    this.borders = data.borders;
  }

  render() {
    const outercontainer = document.createElement("div");
    document.querySelector(this.parent).append(outercontainer);

    const countryContainer = document.createElement("div");
    countryContainer.classList.add("country-container");
    countryContainer.style.display = "flex";
    countryContainer.style.flexDirection = "column"; // Display elements in a column
    countryContainer.style.alignItems = "center"; // Center items horizontally
    countryContainer.style.marginTop = "50px"; // Adjust top margin as needed
    outercontainer.appendChild(countryContainer);

    // Flag and Description Container
    const flagDescriptionContainer = document.createElement("div");
    flagDescriptionContainer.style.display = "flex"; // Set to flex to display in one line
    flagDescriptionContainer.style.marginBottom = "30px"; // Add space between flag and info
    countryContainer.appendChild(flagDescriptionContainer);

    // Flag Image
    const flagImage = document.createElement("img");
    flagImage.src = this.flag;
    flagImage.alt = `${this.name} Flag`;
    flagImage.classList.add("flag-image");
    flagImage.style.width = "400px"; // Set the desired width
    flagImage.style.height = "250px"; // Set the desired height
    flagImage.style.boxShadow = "5px 5px 5px rgba(0, 0, 0, 0.1)"; // Add box shadow
    flagDescriptionContainer.appendChild(flagImage);

    // Country Information
    const infoContainer = document.createElement("div");
    infoContainer.style.width = "60%"; // Adjust the width as needed
    infoContainer.style.marginLeft = "30px"; // Add left margin for space between flag and info
    infoContainer.style.fontWeight = "bold"; // Make the text bold
    infoContainer.style.color =  "#994c00";// Make the text brown
    // Country Name
    const nameHeader = document.createElement("h1");
    nameHeader.textContent = this.name;
    infoContainer.appendChild(nameHeader);

    // Country Description
    const descriptionContainer = document.createElement("div");
    descriptionContainer.classList.add("description-container");

    // Population
    const populationParagraph = document.createElement("p");
    populationParagraph.textContent = `Population: ${this.pop}`;
    descriptionContainer.appendChild(populationParagraph);

    // Language
    const languageParagraph = document.createElement("p");
    languageParagraph.textContent = `Languages: `;
    for (let key in this.languages) {
      let languageName = this.languages[key];
      languageParagraph.textContent += `${languageName} ,`;
    }
    descriptionContainer.appendChild(languageParagraph);

    // Capital
    const capitalParagraph = document.createElement("p");
    capitalParagraph.textContent = `Capital: ${this.capital}`;
    descriptionContainer.appendChild(capitalParagraph);

    // Borders
    if (this.borders.length > 0) {
      const bordersContainer = document.createElement("div");
      bordersContainer.classList.add("borders-container");

      const bordersHeader = document.createElement("h2");
      bordersHeader.textContent = "Borders:";
      bordersContainer.appendChild(bordersHeader);

      this.borders.forEach((borderCode) => {
        const borderLink = document.createElement("button");
        borderLink.textContent = borderCode;
        borderLink.style.textDecoration = "none";
       // borderLink.style.color = "#994c00";
        borderLink.classList = "btn btn-dark ms-2";
        borderLink.style.marginBottom="4px";
        //borderLink.style.background = "black";
        borderLink.href = "#"; // Set the href attribute to avoid any page reload
        borderLink.onclick = () => getCountryByCode(borderCode); // Use an arrow function to pass the borderCode correctly
        bordersContainer.appendChild(borderLink);
        borderLink.style.marginRight = "10px";
      });

      descriptionContainer.appendChild(bordersContainer);
    }

    // Add the description container to the info container
    infoContainer.appendChild(descriptionContainer);

    // Add the info container to the flag and description container
    flagDescriptionContainer.appendChild(infoContainer);

    // ... (rest of your code)

    const map = document.createElement("div");
    map.innerHTML = `
      <iframe src="https://maps.google.com/maps?q=${this.lat},${this.lon}&hl=iw&z=4&amp;output=embed"
          id="map"
          width="100%"
          height="450"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    `;
    map.style.marginTop = "20px"; // Add margin-bottom to the map
    outercontainer.appendChild(map);

    return outercontainer;
  }

  /* render() {
    const countryContainer = document.createElement("div");
    countryContainer.classList.add("country-container");

    const idParentDiv = document.getElementById("id_parent");
    idParentDiv.style.backgroundColor =  "#994c00";
    document.querySelector(this.parent).append(countryContainer);

    // Create a flex container for flag, map, and description
    const flexContainer = document.createElement("div");
    flexContainer.classList.add("flex-container");

    // Flag Image
    const flagImage = document.createElement("img");
    flagImage.src = this.flag;
    flagImage.alt = `${this.name} Flag`;
    flagImage.classList.add("flag-image");
    flexContainer.appendChild(flagImage);

    // Map Container
    const mapContainer = document.createElement("div");
    mapContainer.classList.add("map-container");
    mapContainer.innerHTML = `
      <iframe src="https://maps.google.com/maps?q=${this.lat},${this.lon}&hl=en&z=7&amp;output=embed"
          id="map"
          width="300" <!-- Set the desired width for the map -->
          height="200"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
       ></iframe>
    `;
    flexContainer.appendChild(mapContainer);

    // Country Description
    const descriptionContainer = document.createElement("div");
    descriptionContainer.classList.add("description-container");

    // Population
    const populationParagraph = document.createElement("p");
    populationParagraph.textContent = `Population: ${this.pop}`;
    descriptionContainer.appendChild(populationParagraph);

    // Language
    const languageParagraph = document.createElement("p");
    languageParagraph.textContent = `Languages: `;
    for (let key in this.languages) {
      let languageName = this.languages[key];
      languageParagraph.textContent += `${languageName} ,`;
    }
    descriptionContainer.appendChild(languageParagraph);

    // Capital
    const capitalParagraph = document.createElement("p");
    capitalParagraph.textContent = `Capital: ${this.capital}`;
    descriptionContainer.appendChild(capitalParagraph);

    // Append Flag, Map, and Description to the flex container
    flexContainer.appendChild(descriptionContainer);

    // Borders
    if (this.borders.length > 0) {
      const bordersContainer = document.createElement("div");
      bordersContainer.classList.add("borders-container");

      const bordersHeader = document.createElement("h2");
      bordersHeader.textContent = "Borders:";
      bordersContainer.appendChild(bordersHeader);

      this.borders.forEach((borderCode) => {
        const borderLink = document.createElement("a");
        borderLink.textContent = borderCode;
        borderLink.href = "#"; // Set the href attribute to avoid any page reload
        borderLink.onclick = () => getCountryByCode(borderCode); // Use an arrow function to pass the borderCode correctly
        bordersContainer.appendChild(borderLink);
        borderLink.style.marginRight = "10px";
      });

      flexContainer.appendChild(bordersContainer);
    }

    // Append the flex container to the country container
    countryContainer.appendChild(flexContainer);

    return countryContainer;
  }*/
}
