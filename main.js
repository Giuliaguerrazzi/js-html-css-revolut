$(document).ready( function () {

  var dropClick = $('.dropdown > a');
  var dropMenu = $('.dropdown > .dropdown-menu');

  // show and hide
  dropClick.mouseenter( function () {

    var menu = $(this).next('.dropdown-menu');

    dropMenu.not(menu).hide();

    menu.toggle();

  })

});
