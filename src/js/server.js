// Define an array of fitness services
const services = [
    {
      id: 1,
      name: "Personal Training",
      category: "Personal Training",
      description:
        "One-on-one training sessions tailored to your specific fitness goals.",
      price: 50, // price per session in dollars
      duration: 60, // duration in minutes
    },
    {
      id: 2,
      name: "Yoga Classes",
      category: "Group Fitness",
      description:
        "Join our Yoga classes to improve flexibility, balance, and peace of mind.",
      price: 15, // price per session in dollars
      duration: 60, // duration in minutes
    },
    {
      id: 3,
      name: "Nutrition Consultation",
      category: "Wellness",
      description:
        "Get personalized nutrition advice to complement your fitness routine.",
      price: 70, // price per session in dollars
      duration: 90, // duration in minutes
    },
    {
      id: 4,
      name: "Spin Classes",
      category: "Group Fitness",
      description:
        "High-energy stationary bike workouts that enhance cardiovascular endurance.",
      price: 25, // price per session in dollars
      duration: 45, // duration in minutes
    },
    {
      id: 5,
      name: "Pilates",
      category: "Group Fitness",
      description:
        "Strengthen your core with our Pilates classes, suitable for all fitness levels.",
      price: 20, // price per session in dollars
      duration: 60, // duration in minutes
    },
    {
      id: 6,
      name: "Kickboxing",
      category: "Specialty Classes",
      description:
        "Combine martial arts techniques with heart-pumping cardio in our kickboxing classes.",
      price: 30, // price per session in dollars
      duration: 60, // duration in minutes
    },
    {
      id: 7,
      name: "Zumba",
      category: "Group Fitness",
      description:
        "Dance to great music, with great people, and burn a ton of calories without even realizing it.",
      price: 15, // price per session in dollars
      duration: 60, // duration in minutes
    },
    {
      id: 8,
      name: "Meditation and Mindfulness",
      category: "Wellness",
      description:
        "Guided sessions to help you find mental clarity and reduce stress.",
      price: 10, // price per session in dollars
      duration: 30, // duration in minutes
    },
    {
      id: 9,
      name: "CrossFit",
      category: "Specialty Classes",
      description:
        "Intense physical exercise program that combines different kinds of exercises for a challenging workout.",
      price: 35, // price per session in dollars
      duration: 60, // duration in minutes
    },
    {
      id: 10,
      name: "Strength Training",
      category: "Personal Training",
      description:
        "Sessions focused on increasing your strength with weights and various forms of resistance.",
      price: 45, // price per session in dollars
      duration: 60, // duration in minutes
    },
  ];
  
  // Display the list of services on the services page
  let servicesClass = document.querySelector(".services-page-info-grid");
  services.forEach((service) => {
    let serviceDiv = document.createElement("div");
    serviceDiv.classList.add("services-list-item");
    serviceDiv.innerHTML = `
          <h3>${service.name}</h3>
          <p>${service.description}</p>
          <p>Price: $${service.price} per session</p>
          <p>Duration: ${service.duration} minutes</p>
      `;
    servicesClass.appendChild(serviceDiv);
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
        service.price.toString().includes(searchString)
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
              <p>${service.description}</p>
              <p>Price: $${service.price} per session</p>
              <p>Duration: ${service.duration} minutes</p>
          `;
      servicesClass.appendChild(serviceDiv);
    });
  });