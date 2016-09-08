// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require jquery-ui/accordion
//= require foundation
//= require jquery.slick
//= require jquery-tablesorter
//= require_tree .

$(function(){ $(document).foundation(); });

//--- Tablesorter for portal ---//
$(function(){
  $('#event-table').tablesorter({ sortList: [[1,0]] });
});
$(document).ready(function() {
  //--- Foundation initializiation ---//

  $( "#eventIndex" ).accordion({
    collapsible: true,
    active: false,
    heightStyle: 'content'
  });

  //--- Slick carousel ---//
  $('.homeSlider').not('.slick-initialized').slick({
      autoplay: true,
      autoplaySpeed: 2100,
      fade: true,
      infinite: true,
      speed: 900,
      prevArrow: false,
      nextArrow: false
  });

  //--- Fade Out sidenav on scroll ---//
  $(window).scroll(function(){
    if ($(this).scrollTop()>200){
      $('#navSidebar').fadeIn(500);
      $('#navSidebar').css('display', 'flex');
    } else{
      $('#navSidebar').fadeOut(800);
    }
  });

  //--- Parallaxes ---//
  var $window = $(window);
  $('section[data-type="background"]').each(function(){
       var $bgobj = $(this); // assigning the object
       $(window).scroll(function() {
           var yPos = -( ($window.scrollTop() - $bgobj.offset().top) / $bgobj.data('speed')).toFixed(3);

           // Put together our final background position
           var coords = '50% '+ yPos + 'px';

           // Move the background
           $bgobj.css({ backgroundPosition: coords });
       });
   });

  //--- Fade Out content ---//
  $('#content_wrapper').css('visibility', 'visible').hide();
  $('#content_wrapper').fadeIn(1000);

  // below function causes "fade out"
  // http://stackoverflow.com/questions/19397515/fading-out-a-whole-page-with-jquery
  $(document).on("click", "a", function () {
    var newUrl = $(this).attr("href");
    if (!newUrl || newUrl[0] === "#") {
      location.hash = newUrl;
      return;
    }
    $("#content_wrapper").fadeOut(function () {
      location = newUrl;
    });
  });

  //--- Home page stuff ---///
  $('#homeLogo').delay(600).fadeIn(800);
  $('#homeCaption').delay(1000).fadeIn('slow');
});
