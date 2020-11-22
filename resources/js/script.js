$(document).ready(function() {
   $('.js--tech-class').waypoint(function(direction) {
       if (direction == "down") {
           $('nav').addClass('link_class')
       }

       else {
           $('nav').removeClass('link_class')
       }
   }, {
    offset: '25%'
  })


  $('.js--grid-container').waypoint(function(direction) {
      $('.js--grid-container').addClass('animate__animated animate__fadeIn')
  }, { 
      offset:'60%'
}
  )


  
  $('.js--exp').waypoint(function(direction) {
    $('.js--exp').addClass('animate__animated animate__pulse')
}, { 
    offset:'60%'
}
)







})















$(".open").on("click", function() {
  $(".popup-overlay, .popup-content").addClass("active");
});

//removes the "active" class to .popup and .popup-content when the "Close" button is clicked 
$(".close, .popup-overlay").on("click", function() {
  $(".popup-overlay, .popup-content").removeClass("active");
});






$(".open-1").on("click", function() {
  $(".popup-overlay-1, .popup-content-1").addClass("active");
});

//removes the "active" class to .popup and .popup-content when the "Close" button is clicked 
$(".close-1, .popup-overlay-1").on("click", function() {
  $(".popup-overlay-1, .popup-content-1").removeClass("active");
});







$(".open-2").on("click", function() {
  $(".popup-overlay-2, .popup-content-2").addClass("active");
});

//removes the "active" class to .popup and .popup-content when the "Close" button is clicked 
$(".close-1, .popup-overlay-2").on("click", function() {
  $(".popup-overlay-2, .popup-content-2").removeClass("active");
});








$(".open-3").on("click", function() {
  $(".popup-overlay-3, .popup-content-3").addClass("active");
});

//removes the "active" class to .popup and .popup-content when the "Close" button is clicked 
$(".close-3, .popup-overlay-3").on("click", function() {
  $(".popup-overlay-3, .popup-content-3").removeClass("active");
});



/*
var waypoints = $('#handler-first').waypoint(function(direction) {
  notify(this.element.id + ' hit 25% from top of window') 
}, {
  offset: '25%'
})




*/




