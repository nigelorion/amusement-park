var height = parseInt(prompt("How tall are you in inches?"));


//Everthing below is business
$(document).ready(function() {

  if (height >= 36) {
    $('.adults').show();
  } else {
      $('.kids').show();
  }











});
