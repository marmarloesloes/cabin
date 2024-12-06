var acc = document.getElementsByClassName("accordion-header");

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("actief");

        var panel = this.nextElementSibling;

        if (panel.classList.contains("open")) {
            // Collapse the accordion
            panel.classList.remove("open");
            panel.style.maxHeight = null; // Reset maxHeight to collapse
        } else {
            // Expand the accordion
            panel.classList.add("open");
            panel.style.maxHeight = panel.scrollHeight + "px"; // Dynamically set maxHeight
        }
    });
}
