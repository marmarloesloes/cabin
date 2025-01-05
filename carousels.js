
    const track = document.querySelector('.carousel-track');
    const images = Array.from(track.children);
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    const imageWidth = images[0].getBoundingClientRect().width;

    // Arrange images next to each other
    const setImagePosition = (image, index) => {
        image.style.left = `${imageWidth * index}px`;
    };
    images.forEach(setImagePosition);

    let currentIndex = 0;

    const moveToImage = (index) => {
        track.style.transform = `translateX(-${imageWidth * index}px)`;
    };

    // Button click events
    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex -= 1;
            moveToImage(currentIndex);
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < images.length - 1) {
            currentIndex += 1;
            moveToImage(currentIndex);
        }
    });

