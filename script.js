//carousel
const slides = document.querySelectorAll('.slide');
let dots = document.getElementsByClassName("dot");
let index = 0;

// Update the active dot
function updateDots() {
    // Remove the 'active-dot' class from all dots
    for (let dot of dots) {
        dot.classList.remove('active-dot');
    }
    // Add the 'active-dot' class to the current dot
    dots[index].classList.add('active-dot');
}


function prevSlide(){
    slides[index].classList.remove('active');
    index--;

    if(index < 0)
        index = slides.length -1;

    slides[index].classList.add('active');
    updateDots();   
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
    updateDots();   
}

document.querySelector('.next').addEventListener('click', e => {
    nextSlide();
});

// functionality for the dots to switch slides
for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener('click', () => {
        slides[index].classList.remove('active');
        index = i;
        slides[index].classList.add('active');
        updateDots(); 
    });
}

updateDots();

// Swipe functionality with threshold
const SWIPE_THRESHOLD = 30; 

let touchstartX = 0;
let touchendX = 0;

const slider = document.getElementById('slider');

slider.addEventListener('touchstart', (e) => {
    touchstartX = e.changedTouches[0].screenX;
});

slider.addEventListener('touchend', (e) => {
    touchendX = e.changedTouches[0].screenX;
    handleSwipe();
});

// Handle swipe with threshold distance
function handleSwipe() {
    const swipeDistance = touchstartX - touchendX;

    if (swipeDistance > SWIPE_THRESHOLD) {
        nextSlide();
    } else if (swipeDistance < -SWIPE_THRESHOLD) {
        prevSlide();
    }
}

// Change video source for mobile

document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("background-video");
    const fallback = document.getElementById("video-container");
    const videoSource = document.querySelector("#background-video source");

    // Function to update the video source based on the viewport
    function updateVideoSource() {
        if (window.innerWidth <= 768) {
            // Change to mobile video source
            videoSource.src = "images/5shotsvideo.mp4";
        } else {
            // Change to desktop video source
            videoSource.src = "images/cabinsplit.mp4";
        }
        video.load(); // Reload the video to apply the new source
    }

    // Run the function initially to set video source based on the screen width
    updateVideoSource();

    // Add an event listener to detect viewport changes
    window.addEventListener("resize", updateVideoSource);

    // Check if the video can autoplay
    video.play().then(() => {
        console.log("Video autoplayed successfully.");
        video.style.display = "block"; // Show the video if it plays successfully
        fallback.style.display = "none"; // Hide the fallback
    }).catch((error) => {
        console.warn("Video failed to autoplay. Showing fallback.", error);
        video.style.display = "none"; // Hide the video if it fails
        fallback.style.display = "block"; // Show the fallback
    });

    // Ensure the fallback image is shown if video can't autoplay on page load
    fallback.style.display = "block";
    video.style.display = "none";
});
