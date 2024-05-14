// Select the loader and services class elements
const loader = document.getElementById("loader");
let servicesClass = document.querySelector(".services-page-info-grid");

// Show the loader
loader.style.display = "block";

// Mapping of service names to image paths
const imageMap = {
  "Rickshaw Carry": "assets/Incline-Dumbbell-Hammer-Curl.jpg",
  "Single-Leg Press": "assets/leg-press.jpg",
  "Landmine twist": "assets/landmine-twist.jpg",
  "Weighted pull-up": "assets/weighted-pullup.jpg",
  "T-Bar Row with Handle": "assets/T-bar-row.jpg",
  "Palms-down wrist curl over bench": "assets/palms-down_wrist.jpeg",
  "Atlas Stones": "assets/Atlas-stone.jpg",
  "Dumbbell front raise to lateral raise": "dumbell-front-lat-raise.webp",
  "Clean from Blocks": "assets/clean-from-blocks.jpg",
  "Incline Hammer Curls": "assets/incline-hammer-curls.jpg",
};

// Define an array of fitness services
let services = [];
const apiUrl = "https://api.api-ninjas.com/v1/exercises";
fetch(apiUrl, {
  headers: { "X-Api-Key": "CmULi2yb02XRvTpr+FRwvQ==YXJ1uYD0iPxaF1rP" },
  contentType: "application/json",
})
  .then((response) => response.json())
  .then((data) => {
    // Hide the loader
    loader.style.display = "none";

    // Store the data in the services array
    services = data;

    // Display the list of services on the services page
    services.forEach((service) => {
      let serviceDiv = document.createElement("div");
      serviceDiv.classList.add("services-list-item");

      serviceDiv.innerHTML = `
                <h3>${service.name}</h3>
                <p>Type: ${service.type}</p>
                <p>Muscle: ${service.muscle}</p>
                <p>Equipment: ${service.equipment}</p>`;
      const image = document.createElement("img");
      const imageUrl = imageMap[service.name];
      console.log(imageUrl);
          if (imageUrl) {
            image.src = imageUrl;
            //image.alt = `${service.name} Image`;
          }
          
      //image.src = "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
      serviceDiv.appendChild(image);
      servicesClass.appendChild(serviceDiv);
    });
  })
  .catch((error) => {
    // Hide the loader in case of error
    loader.style.display = "none";
    console.error("Error:", error);
  });

// Get the input field
let searchInput = document.getElementById("searchInput");

// Add event listener to the input field
searchInput.addEventListener("keyup", (e) => {
  // Get the current value of the input field
  let searchString = e.target.value.toLowerCase();

  // Filter the services array
  let filteredServices = services.filter((service) => {
    return (
      service.name.toLowerCase().includes(searchString) ||
      service.type.toString().includes(searchString)
    );
  });

  // Clear the current display
  servicesClass.innerHTML = "";

  

  // Display the filtered services
  filteredServices.forEach((service) => {
    let serviceDiv = document.createElement("div");
    serviceDiv.classList.add("service-list-item");
    serviceDiv.innerHTML = `
              <h3>${service.name}</h3>
              <p>${service.type}</p>
              <p>${service.muscle}</p>
              <p>${service.equipment}</p>
          `;
          const image = document.createElement("img");
          const imageUrl = imageMap[service.name];
          if (imageUrl) {
            image.src = imageUrl;
            //image.alt = `${service.name} Image`;
          }
          serviceDiv.appendChild(image);
    servicesClass.appendChild(serviceDiv);
  });
});

/*const starWarsList = document.querySelector('#services-page-info-grid');

const filmImages = {
  "Rickshaw Carry": "assets/Incline-Dumbbell-Hammer-Curl.jpg",
  "Single-Leg Press": "assets/leg-press.jpg",
  "Landmine twist": "assets/landmine-twist.jpg",
  "Weighted pull-up": "assets/weighted-pullup.jpg",
  "T-Bar Row with Handle": "assets/T-bar-row.jpg",
  "Palms-down wrist curl over bench": "assets/palms-down_wrist.jpeg",
  "Atlas Stones": "assets/Atlas-stone.jpg",
  "Dumbbell front raise to lateral raise": "dumbell-front-lat-raise.webp",
  "Clean from Blocks": "assets/clean-from-blocks.jpg",
  "Incline Hammer Curls": "assets/incline-hammer-curls.jpg",
};

const fetchFitnessServices = async () => {
  const response = await fetch("https://api.api-ninjas.com/v1/exercises", {
    headers: { "X-Api-Key": "CmULi2yb02XRvTpr+FRwvQ==YXJ1uYD0iPxaF1rP" },
    contentType: "application/json",
  });
  const data = await response.json();
  return data;
};

const renderFitnessServices = (services) => {
  services.forEach((service) => {
    const serviceDiv = document.createElement("div");
    serviceDiv.classList.add("services-list-item");
    serviceDiv.innerHTML = `
      <h3>${service.name}</h3>
      <p>Type: ${service.type}</p>
      <p>Muscle: ${service.muscle}</p>
      <p>Equipment: ${service.equipment}</p>`;
    const image = document.createElement("img");
    const imageUrl = filmImages[service.name];
    if (imageUrl) {
      image.src = imageUrl;
    }
    serviceDiv.appendChild(image);
    starWarsList.appendChild(serviceDiv);
  });
};

const searchInput = document.getElementById("searchInput");

const filterServices = (services, searchString) => {
  return services.filter(
    (service) =>
      service.name.toLowerCase().includes(searchString) ||
      service.type.toString().includes(searchString)
  );
};

const updateServices = async () => {
  const searchString = searchInput.value.toLowerCase();
  const services = await fetchFitnessServices();
  const filteredServices = filterServices(services, searchString);
  starWarsList.innerHTML = "";
  renderFitnessServices(filteredServices);
};

searchInput.addEventListener("keyup", updateServices);

// Initial load
updateServices();*/

