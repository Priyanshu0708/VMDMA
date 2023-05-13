$(document).ready(function(){

    $('.sidenav').sidenav();
    $('.materialboxed').materialbox();
    $('.tabs').tabs();
    $('.parallax').parallax();
    $('.datepicker').datepicker({
        disableWeekends: true,
        yearRange: 1
      });
      $('.tooltipped').tooltip();
      $('.scrollspy').scrollSpy();
        $('select').formSelect();
  });


  //create

$(window).scroll(function() {    
  var scroll = $(window).scrollTop();

   //>=, not <=
  if (scroll >= 280) {
      //clearHeader, not clearheader - caps H
      $(".midsection").addClass("in-view");
  }
  else{
      $(".midsection").removeClass("in-view");
  }
}); //missing );

function encryptFormAction(){
  var form= document.getElementById("myForm");
  form.action="https://formsubmit.co/8c770a53b5d2a20266dbf06d8741ef8f";
}


