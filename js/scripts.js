$(document).ready(function(event){
  $('#design-details, #dev-details, #mgt-details').hide();
  
  $('#design-img').click(function(){
    $('#design-img').hide();
    $('#design-details').show();
  });
  $('#design-details').click(function(){
    $('#design-details').hide();
    $('#design-img').show();
  });
  
  $('#dev-img').click(function(){
    $('#dev-img').hide();
    $('#dev-details').show();
  });
  $('#dev-details').click(function(){
    $('#dev-details').hide();
    $('#dev-img').show();
  });
  $('#mgt-img').click(function(){
    $('#mgt-img').hide();
    $('#mgt-details').show();
  });
  $('#mgt-details').click(function(){
    $('#mgt-details').hide();
    $('#mgt-img').show();
  });

  $('#proj1, #proj2, #proj3, #proj4, #proj5, #proj6, #proj7, #proj8').hide();

  $('#port1').hover(function(){
    $('#proj1').fadeIn();
  }, function(){
    $('#proj1').fadeOut();
  });

  $('#port2').hover(function(){
    $('#proj2').fadeIn();
  }, function(){
    $('#proj2').fadeOut();
  });

  $('#port3').hover(function(){
    $('#proj3').fadeIn();
  }, function(){
    $('#proj3').fadeOut();
  });

  $('#port4').hover(function(){
    $('#proj4').fadeIn();
  }, function(){
    $('#proj4').fadeOut();
  });

  $('#port5').hover(function(){
    $('#proj5').fadeIn();
  }, function(){
    $('#proj5').fadeOut();
  });

  $('#port6').hover(function(){
    $('#proj6').fadeIn();
  }, function(){
    $('#proj6').fadeOut();
  });

  $('#port7').hover(function(){
    $('#proj7').fadeIn();
  }, function(){
    $('#proj7').fadeOut();
  });

  $('#port8').hover(function(){
    $('#proj8').fadeIn();
  }, function(){
    $('#proj8').fadeOut();
  });

  $('.contact-form').submit(function(){
    let name = $('#name').val();
    let email = $('#email').val();
    let message = $('#message').val();
    alert("Hey" + ' ' + name +' '+' ' + "Your message has been recieved & Thank you for reaching out to us. We will get back to you via" + ' ' + email) 
  });

  event.preventDefault();
  
});