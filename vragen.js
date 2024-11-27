// veelgestelde vragen accordeon //

const headers = document.querySelectorAll('.accordion-header');

headers.forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;

        // Toggle the content's visibility
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});
