// fades in different parts of the document
$(document).ready(function(){
  $(".bio2").fadeIn(1000);
  $(".dropdown").delay(600).fadeIn(1000);
  $(".bio3").delay(1000).fadeIn(1000);
});

// animates dropdown going up and down depending on if you click it 
$(document).ready(function(){
  $(".drop").click(function(event) {
    $(".dropcont").animate({height: 'toggle'})
    });
});

// changes dropdown text to whatever user is hovering over
$(document).ready(function(){
  $(".dropcont a").hover(function() {
    // alert()
    $(".drop").html($(this).html())
  })
})

// gets json data if person selects an option
$(document).on("click", ".dropcont a", function(){
  $(".dropcont").animate({height: 'toggle'});
  //Post the request to the json file
  var elem = $(".drop").html();
  $.ajax({
    type: "GET",
    url: "../back_end/packages.json",
    dataType: "json",
    success: function(data, status){
      var output = '';
      var data1 = {
        "items": []
      };
      $.each(data.packages, function(i, item) {

        if (item.type == elem){
          
          var curr = "<div class=\"entry\">"
          curr+="<div class=\"ArticleHead\">"+item.name+"</div>";
          curr+="<div class=\"SubHead\">Provider: "+item.company+"</div>";
          curr+="<div class=\"Summary\">Description: "+item.description+"</div>";
          curr+="</div>"
          curr+="</div>"
          output+=curr;
          data1.items.push(item);
        }      
        
      });
      
      // sends html to proper location in html file and displays it with animation
      $('#jsonhere').html(output);
      $('#jsonhere').slideDown(1000);
      $('.nextButton').delay(1000).show(0);

      // stores data for future use
      localStorage.setItem("product", elem);
      localStorage.setItem("elements", JSON.stringify(data1));
      
      // displays header
      $("footer").delay(2000).fadeIn(1000);
    }, 
    error: function(msg) {
      // there was a problem
      alert("There was a problem: " + msg.status + " " + msg.statusText);
    }
  });
});

// if next button is selected, user is taken to next page
$(document).on("click", ".nextButton", function(){
  window.location.href = '../comparisonPage2/Comparison2.html';
});
