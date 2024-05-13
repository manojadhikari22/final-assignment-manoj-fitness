const openingHours = document.querySelector('.open-fitness');
let openingHoursContainer = document.querySelector('.opening-hours-container');
let closingHoursBtn = document.querySelector('.cancel-btn');

openingHours.addEventListener('click', function(e) {
    e.preventDefault();
    openingHoursContainer.style.display = (openingHoursContainer.style.display === 'none' || openingHoursContainer.style.display === '') ? 'block' : 'none';
});

closingHoursBtn.addEventListener('click', function(e) {
    e.preventDefault();
    openingHoursContainer.style.display = 'none';
})