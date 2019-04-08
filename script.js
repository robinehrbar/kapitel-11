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

$('.tab-list').each(function() {
  var $this = $(this);
  var $tab = $this.find('li.active');
  var $link = $tab.find('a');
  var $panel = $($link.attr('href'));
  $this.on('click', '.tab-control', function(e) {
      e.preventDefault();
      var $link = $(this);
      var id = this.hash;
      if ( id && !$link.is('.active')) {
          $panel.removeClass('active');
          $tab.removeClass('active');
          $panel = $(id).addClass('active');
          $tab = $link.parent().addClass('active');
      }
  });
});