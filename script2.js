
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
  
// veelgestelde vragen accordeon //

const headers = document.querySelectorAll('.accordion-header');

headers.forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;

        // Toggle the content's visibility
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});

