// loads in json data
var productName = localStorage.getItem("product");
var data = JSON.parse(localStorage.getItem("elements"));

// fades in any text or buttons
$(document).ready(function(){
  $(".bio2").fadeIn(1000);
});

// displays blocks of product data that the user can change their ordering 
$(document).ready(function(){
  var output = "";
  $.each(data.items, function(i, item) {
    var curr = "<div class=\"default\">";
    curr += "<div class=\"ArticleHead1\">"+item.name+"</div>";
    curr += "<div class=\"SubHead1\">Provider: "+item.company+"</div>";
    curr += "<div class=\"Summary1\">Price: $"+item.price+"</div>";
    curr += "<div class=\"Summary1\">Security: "+item.security+"</div>";
    curr += "</div>"
    output += curr;
  });

  // fades in the rest of the parts of the webpage
  $('.box3').html(output);
  $('.box3').fadeIn(1000);
  $('.dropdown_3').delay(200).fadeIn(1000);
  $('.submitButton').delay(500).fadeIn(1000); 
  $('#fname').delay(300).fadeIn(1000); 
  $('.prevButton').delay(300).fadeIn(1000);
});

// makes sure that you can reorder the blocks, but only on the y axis
$(function() {
  $( "div.box3" ).sortable({
    // revert: true, 
    axis: 'y',
  });
});

// changes json data to csv data if the user wants csv
function jsonToCSV(data) {
  var objs = document.getElementsByClassName("ArticleHead1");
  var darray = JSON.parse(localStorage.getItem("elements"))['items'];
  var filename = document.getElementById('fname').value;

  // checker to make sure user entered a valid filename
  if(filename.trim() == "") 
  {
    alert("Please Enter a Valid Filename");
    return;
  }

  // loops through and gets the ordering of the blocks and their respective json object

  var len = objs.length
  var ordering = [];
  for(let i = 0; i<len; i++)
  {
    var curr = objs.item(i).innerHTML;
    for(let j = 0; j<darray.length; j++)
    {
      if(darray[j]['name'] == curr){
        ordering.push(darray[j]);
        break;
      }
    }
  }
  // if format is CSV, you reorder each json block as a CSV string

  var format = $('.drop').html();
  if(format == "CSV")
  {
    var CSVData = "name,company,description,price,storage,bandwidth,secuity,type,\n"
    for(let i = 0; i<ordering.length; i++)
    {
      var myStr = "";
      myStr += "\""+ordering[i]["name"]+"\",";
      myStr += "\""+ordering[i]["company"]+"\",";
      myStr += "\""+ordering[i]["description"]+"\",";
      myStr += "\""+ordering[i]["price"]+"\",";
      myStr += "\""+ordering[i]["storage"]+"\",";
      myStr += "\""+ordering[i]["bandwidth"]+"\",";
      myStr += "\""+ordering[i]["security"]+"\",";
      myStr += "\""+ordering[i]["type"]+'\"\n';

      CSVData += myStr;
    }
    // use blob to create temporary uri whose primary attribute/job is to download the data
    const blob = new Blob([CSVData], {type: 'text/csv'});
    const url = window.URL.createObjectURL(blob) 
    const a = document.createElement('a') 
    a.setAttribute('href', url) 
    a.setAttribute('download', filename+'.csv');
    a.click() 
  }
  else if(format == "JSON")
  {
    // if they want a json file downloaded, you just reformat the current json files to look properly formatted
    var JSONData = "{\n\t\"packages\": [\n"
    for(let i = 0; i<ordering.length; i++)
    {
      var myStr = "\t\t{\n";
      myStr += "\t\t\t\"name\": \""+ordering[i]["name"]+"\",\n";
      myStr += "\t\t\t\"company\": \""+ordering[i]["company"]+"\",\n";
      myStr += "\t\t\t\"description\": \""+ordering[i]["description"]+"\",\n";
      myStr += "\t\t\t\"price\": "+ordering[i]["price"]+",\n";
      myStr += "\t\t\t\"storage\": \""+ordering[i]["storage"]+"\",\n";
      myStr += "\t\t\t\"bandwidth\": \""+ordering[i]["bandwidth"]+"\",\n";
      myStr += "\t\t\t\"security\": \""+ordering[i]["security"]+"\",\n";
      myStr += "\t\t\t\"type\": \""+ordering[i]["type"]+"\"\n";
      myStr += "\t\t}"
      if(i != (ordering.length-1)) myStr += ",\n";
      else myStr += "\n";
      JSONData += myStr;
    }
    JSONData += "\t]\n}"

    // use blob to create temporary uri whose primary attribute/job is to download the data
    const blob = new Blob([JSONData], {type: 'application/json'});
    const url = window.URL.createObjectURL(blob) 
    const a = document.createElement('a') 
    a.setAttribute('href', url) 
    a.setAttribute('download', filename+'.json');
    a.click() 
  }

  // if file format is not specified, send message to user
  else {
    alert("Please Choose Either CSV or JSON");
  }
}


// enables functionality of dropdown menu like in previous pages
$(document).ready(function(){
  $(".drop").click(function(event) {
    $(".dropcont").animate({height: 'toggle'})
    });
});

$(document).ready(function(){
  $(".dropcont a").hover(function() {
    // alert()
    $(".drop").html($(this).html())
  })
})

$(document).on("click", ".dropcont a", function(){
  $(".dropcont").animate({height: 'toggle'})  
});

// if user selects previous button, they go to previous page
$(document).on("click", ".prevButton", function(){
  window.location.href = '../comparisonPage2/Comparison2.html';
});