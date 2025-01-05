

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
