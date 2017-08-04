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
      sql += "WHERE colour=" + colour;
    }
    $.ajax({
        type: "POST",
        url: '104.199.75.37/query.php',
        data: {'functionName': 'query', 'query': sql},
        success: function(response){
          console.log(response);
        }
      })
  })
})
