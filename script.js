$('.accordion').on('click','.accordion-titel',function(e){
    e.preventDefault();
    $(this)
        .next('.accordion-inhalt')
        .not(':animated')
        .slideToggle();
});