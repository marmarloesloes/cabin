var acc = document.getElementsByClassName("accordion-header");

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        var panel = this.nextElementSibling;

        // Toggle the accordion
        if (panel.classList.contains("open")) {
            // Collapse the accordion
            panel.classList.remove("open");
            panel.style.maxHeight = "0"; // Collapse with max-height: 0
        } else {
            // Expand the accordion
            panel.classList.add("open");
            panel.style.maxHeight = panel.scrollHeight + "px"; // Dynamically set max-height
        }
    });
}
