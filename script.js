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


  //carousel
  const slides = document.querySelectorAll('.slide');
let index = 0;

function prevSlide(){
    slides[index].classList.remove('active');
    index--;

    if(index < 0)
        index = slides.length -1;

    slides[index].classList.add('active');      
}

document.querySelector('.prev').addEventListener('click', e => {
    prevSlide();
});

function nextSlide(){
    slides[index].classList.remove('active');
    index++;

    if(index > slides.length -1)
        index = 0;

    slides[index].classList.add('active');      
}

document.querySelector('.next').addEventListener('click', e => {
    nextSlide();
});

// Swipe functionality with threshold
const SWIPE_THRESHOLD = 30;  // Minimum swipe distance to trigger slide change

let touchstartX = 0;
let touchendX = 0;

const slider = document.getElementById('slider'); // The slider container

slider.addEventListener('touchstart', (e) => {
    touchstartX = e.changedTouches[0].screenX;
});

slider.addEventListener('touchend', (e) => {
    touchendX = e.changedTouches[0].screenX;
    handleSwipe();
});

// Handle swipe with threshold distance
function handleSwipe() {
    const swipeDistance = touchstartX - touchendX; // Calculate swipe distance

    if (swipeDistance > SWIPE_THRESHOLD) {
        // Swiped left (next slide)
        nextSlide();
    } else if (swipeDistance < -SWIPE_THRESHOLD) {
        // Swiped right (previous slide)
        prevSlide();
    }
}

