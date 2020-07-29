$(document).ready(
  function() {
    $(".hamburger").click(function(){
      $(".header-hamburgerMenu").removeClass("hidden");
      $(".hamburger").addClass("hidden");
      $(".close").removeClass("hidden");
    });

    $(".close").click(function(){
      $(".header-hamburgerMenu").addClass("hidden");
      $(".close").addClass("hidden");
      $(".hamburger").removeClass("hidden");
    })
  }
);
