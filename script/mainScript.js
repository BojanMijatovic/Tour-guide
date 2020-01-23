$(document).ready(function () {

  // Side nav
  $('.button-collapse').sideNav();

  //  slider
  $('.slider').slider({
    indicators: false,
    height: 350,
    transition: 500,
    interval: 5000
  })

  // scrollspy
  $('.scrollspy').scrollSpy();

});