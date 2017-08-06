function makeSQL(){
  console.log("hlloe");
}


$(window).on('load', function(){
  $('form').submit(function(event){
    event.preventDefault();
    var values = $(this).serialize();
    var colour = values.split("=")[1];
    var sql = "SELECT * FROM patterns"
    if(colour != "any"){
      sql += " WHERE color='" + colour+ "'";
    }
    $.ajax({
        type: "POST",
        url: '../query.php',
        data: {'functionName': 'query', 'query': sql},
        success: function(response){
	  var parseResponse = JSON.parse(response);
          var ul = document.getElementById("listBlock");
	  ul.innerHTML = "";
	  for(var i in parseResponse){
		  var name = parseResponse[i]["name"];
		  var colour = parseResponse[i]["colour"];
	  	
	  	var canvas = document.getElementById("c");
	  	var ctx = canvas.getContext("2d");
	  	var image = new Image();
	  	image.onload = function(){
			ctx.drawImage(image, 0, 0);
	  	};
	  	image.src = parseResponse[i]["pic"];
		document.getElementById("nameSpan").innerHTML = name;
		document.getElementById("colourSpan").innerHTML = colour;
		var newLi = "<li>Colour: " + colour + " Name: " + name + "</li>";
		$(ul).append(newLi);
		}
        }
      })
  })
})
