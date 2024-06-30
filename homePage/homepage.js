$(document).ready(function(){
    $(".verticalLine").animate({width: "600px"}, 2000);
    $("#graphic").animate({fontSize: "20px"}, 1000);
    $(".AmazonImage").delay(1200).fadeIn(1000);
    $(".AzureImage").delay(1500).fadeIn(1000);
    $(".GoogleImage").delay(1800).fadeIn(1000);
    $(".SalesForceImage").delay(2100).fadeIn(1000);

    
    $("#firstPara").fadeIn(1000);
    $("#secondPara").delay(300).fadeIn(1000);
    $("footer").delay(1000).fadeIn(1000);
    
});

$(document).scroll(function() {
    var y = $(this).scrollTop();
    // if (y > 100) {
    //     $('#secondPara').fadeIn(1000);
    //   }
    if (y > 350) {
      $('#thirdPara').fadeIn(1000);
      $("#SarveshHeadshot").delay(100).fadeIn(1000);
      $(".teamCaption").delay(100).fadeIn(1000);

      $("#ChrisHeadshot").delay(300).fadeIn(1000);
      $(".teamCaption1").delay(300).fadeIn(1000);

      $("#HaydenHeadshot").delay(500).fadeIn(1000);
      $(".teamCaption2").delay(500).fadeIn(1000);
    }
  });