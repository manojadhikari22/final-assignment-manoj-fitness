// Select the loader and services class elements
const loader = document.getElementById("loader");
let servicesClass = document.querySelector(".services-page-info-grid");

// Show the loader
loader.style.display = "block";

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
      image.src = "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
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
          image.src = "./assets/Incline-Dumbbell-Hammer-Curl.jpg";
          serviceDiv.appendChild(image);
    servicesClass.appendChild(serviceDiv);
  });
});