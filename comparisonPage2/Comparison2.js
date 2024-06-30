// loads json data from localStorage

var productName = localStorage.getItem("product");
var data = JSON.parse(localStorage.getItem("elements"));

// fades in parts of the website
$(document).ready(function(){
  $(".bio2").fadeIn(1000);
  $(".dropdown_l").delay(600).fadeIn(1000);
  $(".dropdown_r").delay(800).fadeIn(1000);
  $(".submitButton").delay(1000).fadeIn(1000);
});

// dynamically adds the appropriate json product names to the left and right dropdown menus
$(document).ready(function(){
  var output = "";
  $.each(data.items, function(i, item) {
    output += "<a href=\"#\">"+item.name+"</a><br>";
  });

  $('.dropcont_r').html(output);
  $('.dropcont_l').html(output);
  
});

// enables same functionality as dropdown menu for previous page
$(document).ready(function(){
  $(".drop_r").click(function(event) {
    $(".dropcont_r").animate({height: 'toggle'})
    $(".drop_r").html("Select Product 2");
    });
});

$(document).ready(function(){
  $(".dropcont_r a").hover(function() {
    $(".drop_r").html($(this).html())
  })
});

$(document).on("click", ".dropcont_r a", function(){
  $(".dropcont_r").animate({height: 'toggle'})  
});

$(document).ready(function(){
  $(".drop_l").click(function(event) {
    $(".dropcont_l").animate({height: 'toggle'})
    $(".drop_l").html("Select Product 1");
    });
});

$(document).ready(function(){
  $(".dropcont_l a").hover(function() {
    // alert()
    $(".drop_l").html($(this).html())
  })
});

$(document).on("click", ".dropcont_l a", function(){
  $(".dropcont_l").animate({height: 'toggle'})  
});

//if user clicks on submit button
$(document).on("click", ".submitButton", function(){
  var product1 = $(".drop_l").html();
  var product2 = $(".drop_r").html();

  //if they try to compare same product, they get a message 
  if(product1==product2) 
  {
    alert("Cannot Compare The Same Product");
    $(".drop_l").html("Select Product 1");
    $(".drop_r").html("Select Product 2");
  }

  //otherwise, get the appropriate json object for each product name and load in all the data for each object
  else
  {
    var output1;
    var output2;
     
    $.each(data.items, function(i, item) {
      if(item.name==product1) output1 = item;
      if(item.name==product2) output2 = item;
    });
    var html1 = "";
    var html2 = "";

    html1 += "<div><div class = \"myHeader\">Name</div><b>"+output1['name']+"</b></div>"
    html1 += "<div><div class = \"myHeader\">Service Provider</div><b>"+output1['company']+"</b></div>"
    html1 += "<div><div class = \"myHeader\">Price</div><b>$"+output1['price']+"</b></div>"
    html1 += "<div><div class = \"myHeader\">Security</div><b>"+output1['security']+"</b></div>"
    html1 += "<div><div class = \"myHeader\">Storage</div><b>"+output1['storage']+"</b></div>"
    html1 += "<div><div class = \"myHeader\">Bandwidth</div><b>"+output1['bandwidth']+"</b></div>"
    html1 += "<div><div class = \"myHeader\">Cloud Service Type</div><b>"+output1['type']+"</b></div>"

    html2 += "<div><div class = \"myHeader\">Name</div><b>"+output2['name']+"</b></div>"
    html2 += "<div><div class = \"myHeader\">Service Provider</div><b>"+output2['company']+"</b></div>"
    html2 += "<div><div class = \"myHeader\">Price</div><b>$"+output2['price']+"</b></div>"
    html2 += "<div><div class = \"myHeader\">Security</div><b>"+output2['security']+"</b></div>"
    html2 += "<div><div class = \"myHeader\">Storage</div><b>"+output2['storage']+"</b></div>"
    html2 += "<div><div class = \"myHeader\">Bandwidth</div><b>"+output2['bandwidth']+"</b></div>"
    html2 += "<div><div class = \"myHeader\">Cloud Service Type</div><b>"+output2['type']+"</b></div>"

    // animate the html being loaded in, and animate next and prev buttons being loaded in
    $(".box").html(html1);
    $(".boxOther").html(html2);

    $(".box").slideDown(700);
    $(".boxOther").slideDown(700);

    
    $('.nextButton').delay(1000).show(0);
    
    $('.prevButton').delay(1000).show(0);
  }

});

// prev button goes to prev page, next button goes to next page
$(document).on("click", ".nextButton", function(){
  window.location.href = '../comparisonPage3/Comparison3.html';
});


$(document).on("click", ".prevButton", function(){
  window.location.href = '../comparisonPage1/Comparison.html';
});
