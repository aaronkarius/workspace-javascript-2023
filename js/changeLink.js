// $("body")
//   .hide()
//   .fadeIn(1000, function () {
//     alert("test!");
//   });

$("h1").click(() => {
  $(this).text("Hide this image");
  $("img").hide();
  $("body").children("p").slideToggle();
});

$("img").each((_, $img) => {
  $($img).attr("src", `img/${$($img).attr("src")}`);
});

$("a").each((_, $a) => {
  $($a).attr("href", "https://google.com");
});
