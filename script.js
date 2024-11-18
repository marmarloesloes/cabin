// Get references to the menu button, dropdown menu, and close button
const menuButton = document.getElementById('menu-button');
const dropdownMenu = document.getElementById('dropdown-menu');
const menuItems = dropdownMenu.querySelectorAll('a'); // Select all menu items

// Toggle the menu visibility
menuButton.addEventListener('click', () => {
    dropdownMenu.classList.toggle('active');
});

// Close the menu when a menu item is clicked
menuItems.forEach((item) => {
    item.addEventListener('click', () => {
        dropdownMenu.classList.remove('active');
        menuButton.classList.remove('change');
    });
});

//menu animation
function myFunction(x) {
    x.classList.toggle("change");
  }

  document.addEventListener('DOMContentLoaded', function () {
    var myCarousel = new bootstrap.Carousel(document.getElementById('reviewCarousel'), {
        interval: 5000,  // Optional: Adjust the interval for the slide duration
        ride: 'carousel' // Make sure the carousel is automatically cycling
    });
});
