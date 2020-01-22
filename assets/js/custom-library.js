window.onscroll = function() {myStickyFunction()};
var header = document.getElementById("top-menu");
var sticky = header.offsetTop;
function myStickyFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

$(document).ready(function(){
  if (window.location.hash == "#contact") {
    $('html, body').animate({
       scrollTop: $("#contact").offset().top
     }, 1000);
  }
})

