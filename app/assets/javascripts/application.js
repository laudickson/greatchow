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
//= require jquery-ui/widgets/accordion
//= require foundation
//= require jquery.slick
//= require jquery-tablesorter
//= require_tree .

//--- Foundation initializiation ---//
$(function(){ $(document).foundation(); });

//--- Tablesorter for portal ---//
$(function(){
  $('#event-table').tablesorter({ sortList: [[1,0]] });
});
$(document).ready(function() {
  var $win = $(window);
  var $nav = $('#navSidebar');
  var $pictureSection = $('section[data-type="background"]');
  var $logo = $('#home2');
  var $logoCaption = $('#homeCaption');
  var $menuIntro = $('#menu');
  var $menucaption = $('#menuCaption')

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
  $win.scroll(function(){
    if ($(this).scrollTop()>200){
      $nav.fadeIn(500);
      $nav.css('display', 'flex');
    } else{
      $nav.fadeOut(800);
    }
  });

  //--- Parallaxes ---//
  $pictureSection.each(function(){
    var $bgobj = $(this); // assigning the object
    $win.scroll(function() {

      // calculations
      var yPos = -(($win.scrollTop() - $bgobj.offset().top) / $bgobj.data('speed')).toFixed(3);

      // final background position
      var coords = '50% '+ yPos + 'px';

      // move the background
      $bgobj.css({ backgroundPosition: coords });
       });
   });

  //--- Home page stuff ---///
  $logo.delay(800).fadeIn(800);
  $logoCaption.delay(1500).fadeIn('slow');
});
