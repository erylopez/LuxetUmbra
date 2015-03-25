 $(document).ready(function () {
    resize();
    //initialize swiper when document ready  
    var mySwiper = new Swiper ('.swiper-container', {
      pagination: '.swiper-pagination',
              paginationClickable: '.swiper-pagination',
              nextButton: '.swiper-button-next',
              prevButton: '.swiper-button-prev',
              spaceBetween: 30
    })        
  });

$(window).resize(function() {
  resize();
});

function resize(){
  var vHeight = $(window).height(),
    vWidth = $(window).width(),
    cover = $('.cover');

  cover.css({"height":vHeight,"width":vWidth});
}
