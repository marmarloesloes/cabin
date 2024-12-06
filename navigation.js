// Navigation
document.addEventListener("DOMContentLoaded", function () {
    fetch("navigation.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navigation-placeholder").innerHTML = data;

            // Attach event listeners after navigation.html has been loaded
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

            // Dynamically update internal links with hashes
            const currentPage = window.location.pathname.split("/").pop() || "index.html";
            const hashLinks = document.querySelectorAll('a[href^="#"]'); // Select all links with href starting with #

            hashLinks.forEach(link => {
                const hash = link.getAttribute("href"); // Get the hash, e.g., "#reserveren"
                if (currentPage !== "index.html") {
                    link.setAttribute("href", `index.html${hash}`); // Prepend "index.html" to the hash
                }
            });
        })
        .catch(error => console.error("Error loading navigation:", error));
});

// Menu animation function
function myFunction(x) {
    x.classList.toggle("change");
}


