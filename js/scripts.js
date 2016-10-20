var height = parseInt(prompt("How tall are you in inches?"));


//Everthing below is business
$(document).ready(function() {

  if (height >= 36) {
    $(".adults").css("color", "green");
  } else {
      $(".kids").css("color", "green");
  }











});
