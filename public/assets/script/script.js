$("#changeBg").on("click", function() {
  
  var currentId = this.id;

  if ($("#changeBg").attr("name") != "hamB") {
    $("#changeBg").attr("name", "hamB")
    $("body").css("background-image", "url(https://i.giphy.com/media/LEDow0BfZVlOE/giphy.webp)")
    $("body").css("background-repeat", "repeat")
    console.log("background changed");
  }
  else {
    $("#changeBg").attr("name", "grill")
    $("body").css("background-image", "url(https://s11284.pcdn.co/wp-content/uploads/2017/04/BBQ-grill-flames.jpg)")
    $("body").css("background-repeat", "repeat")
    console.log("background changed");
  }
})