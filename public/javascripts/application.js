// -------------- APPLICATION.JS --------------
// Aplication wide javascript

// -------------- JQUERY START --------------
$(document).ready(function () {

  // Make colapsing things collapse
  $(".collapse").collapse();
  
  // Popover
  $('.help').popover();
  
  // Text Area
  $('#textarea').wysihtml5();

}); //eo: Document Ready

