// getter
$("h1").css("color")
// setter
$("h1").css("color", "red")

$("h1").addClass("big-tittle margin");
$("h1").removeClass("big-tittle margin");

$("h1").text("fuck")

$("button").html("<em>fuck</em>")


console.log($("img").attr("src"))
$("a").attr("href", "https://www.yahoo.com")

// get class
$("h1").attr("class")



// even listner

$("h1").click(function() {
  $("h1").css("color", "purple")
})


$("button").click(function(e) {
  console.log(this)
  $("button").css("background-color", "purple")
  $("h1").css("color", "purple")
  $("h1").slideUp().slideDown().animate({margin: "20%"});
})

$("body").keypress(function(e) {
  console.log(e.key);
  $("h1").text(e.key);
})

$("h1").on("mouseover", function () {
  $("h1").css("color", "blue");
})
