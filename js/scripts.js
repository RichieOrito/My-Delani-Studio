$(document).ready(function(){
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
});