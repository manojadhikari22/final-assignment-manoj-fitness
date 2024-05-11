function toggleOpeningHours(event) {
    event.preventDefault();
    console.log("Toggle function called");
    let openingHoursContainer = document.querySelector('.opening-hours-container');
    openingHoursContainer.style.display = (openingHoursContainer.style.display === 'none' || openingHoursContainer.style.display === '') ? 'block' : 'none';
}