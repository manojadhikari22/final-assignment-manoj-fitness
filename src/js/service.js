// Select the loader and services class elements
const loader = document.getElementById("loader");
let servicesClass = document.querySelector(".services-page-info-grid");

// Show the loader
loader.style.display = "block";

// Mapping of service names to image paths
/*const imageMap = {
  "Rickshaw Carry": "../assets/Incline-Dumbbell-Hammer-Curl.jpg",
  "Single-Leg Press": "../assets/leg-press.jpg",
  "Landmine twist": "assets/landmine-twist.jpg",
  "Weighted pull-up": "assets/weighted-pullup.jpg",
  "T-Bar Row with Handle": "assets/T-bar-row.jpg",
  "Palms-down wrist curl over bench": "assets/palms-down_wrist.jpeg",
  "Atlas Stones": "assets/Atlas-stone.jpg",
  "Dumbbell front raise to lateral raise": "dumbell-front-lat-raise.webp",
  "Clean from Blocks": "assets/clean-from-blocks.jpg",
  "Incline Hammer Curls": "assets/incline-hammer-curls.jpg",
};*/
const imageMap = {
  "Rickshaw Carry": "https://res.cloudinary.com/node-blog/image/upload/v1715717338/dumbell-front-lat-raise_qol6jv.webp",
  "Single-Leg Press": "https://res.cloudinary.com/node-blog/image/upload/v1715717338/leg-press_kmmx0y.jpg",
  "Landmine twist": "https://res.cloudinary.com/node-blog/image/upload/v1715717625/landmine-twist_dkhefu.jpg",
  "Weighted pull-up": "https://res.cloudinary.com/node-blog/image/upload/v1715717338/weighted-pullup_csao9e.jpg",
  "T-Bar Row with Handle": "https://res.cloudinary.com/node-blog/image/upload/v1715717338/T-bar-row_kjjqv5.jpg",
  "Palms-down wrist curl over bench": "https://res.cloudinary.com/node-blog/image/upload/v1715717338/palms-down_wrist_lc2jxf.jpg",
  "Atlas Stones": "https://res.cloudinary.com/node-blog/image/upload/v1715717767/Atlas-stone_uqchtt.jpg",
  "Dumbbell front raise to lateral raise": "https://res.cloudinary.com/node-blog/image/upload/v1715717338/dumbell-front-lat-raise_qol6jv.webp",
  "Clean from Blocks": "https://res.cloudinary.com/node-blog/image/upload/v1715717819/clean-from-blocks_denzjv.jpg",
  "Incline Hammer Curls": "https://res.cloudinary.com/node-blog/image/upload/v1715717338/incline-hammer-curls_jbcc1i.jpg",
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



