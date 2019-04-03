/* $('.accordion').on('click','.accordion-titel',function(e){
    e.preventDefault();
    $(this)
        .next('.accordionInhalt')
        .not(':animated')
        .slideToggle();
}); */

var acc = document.getElementsByClassName("accordionTitel");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the accordionInhalt */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active accordionInhalt */
    var accordionInhalt = this.nextElementSibling;
    if (accordionInhalt.style.display === "block") {
      accordionInhalt.style.display = "none";
    }
    else {
      accordionInhalt.style.display = "block";
    }
  });
}