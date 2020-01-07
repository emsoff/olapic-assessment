$(document).ready(function() {

  /******** Homepage Carousel - All Photos *********/

  // Build API Request

  // Set customer-specific variables

  var apiKey = '0a40a13fd9d531110b4d6515ef0d6c529acdb59e81194132356a1b8903790c18';

  var customerId = '215757';

  // Build endpoint
  
  var olapicEndpoint = "https://photorankapi-a.akamaihd.net/customers/" + customerId + "/media/recent?auth_token=" + apiKey + "&version=v2.2";

  $.ajax({
    dataType: "json",
    url: olapicEndpoint,
    type: "GET",
    data: {
      format: "json"
    },
    success: function(data) {

      // Create array of photos pulled from the Olapic API response

      var mediaArray = data.data._embedded.media;

      // Loop through the mediaArray      

      for (var i = 0, len = mediaArray.length; i < len; i++) {

        // Append the images to the carousel

        var olapicImage = mediaArray[i].images.normal;
        $(".owl-carousel").append("<div class='item olapic-image'><img src='" + olapicImage + "'></div>");
      }

      // Set up Owl Carousel

      $(".owl-carousel").owlCarousel({
        items: 4,
        loop: true,
        touchDrag: true,
        nav: true,
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