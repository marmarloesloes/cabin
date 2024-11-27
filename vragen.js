var acc = document.getElementsByClassName("accordion-header");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("actief");

    var panel = this.nextElementSibling;

    if (panel.classList.contains("open")) {
        panel.classList.remove("open");
      } else {
        /* Otherwise, open the panel by adding the "open" class */
        panel.classList.add("open");
      }
    });
}