$(document).ready(function() {

  /******** Homepage Carousel - All Photos *********/

  // Build API Request
  var olapicEndpoint = "";

  $.ajax({
    dataType: "json",
    url: olapicEndpoint,
    type: "GET",
    data: {
      format: "json"
    },
    success: function(data) {     
      
      // Create array of photos pulled from the Olapic API response
      var mediaArray = ;

      // Loop through the mediaArray
      

      // Append the images to the carousel
        $(".owl-carousel").append("<div class='item olapic-image'><img src='" + olapicImage + "'></div>");
      };

      // Set up Owl Carousel
      $(".owl-carousel").owlCarousel({
        items: 4,
        loop: true,
        touchDrag: true,
        nav: false,
        navText: ["<i class='arrow left'></i>", "<i class='arrow right'></i>"],
        dots: false,
        video: true,
        slideBy: 'page',
        navSpeed: 150,
        autoplay: false,
        autoplayTimeout: 2000,
        autoplaySpeed: 150,
        responsive: {
          0: {
            items:1,
            center:true
          },
          414: {
            items: 2
          },
          550: {
            items:3
          },
          1000: {
            items:4
          }
        }
      });
    },
    error: function(error){
      console.log(error);
    }
  });
});