// handles contact form submission
var submitted = false;
$('#gform').on('submit', function(e) {
  e.preventDefault();
  $('#gform *').slideUp(500, function() {
    $(this).remove();
  });
  $('#gform').prepend('Your submission has been processed...');
});

var message = '';

$('#sendMessage').on('click', function() {
  message = $('#gform').serialize().split('&');
  $.ajax({
    url: 'https://formspree.io/mdowbnpk',
    method: 'POST',
    data: { message: message },
    dataType: 'json',
  });
});

function validateForm() {
  let name = $('#contact-name');
  let email = $('#contact-email');
  let message = $('#contact-message');
  let submitButton = $('#sendMessage');

  name && email && message ? submitButton.removeClass('disabled') : null;
}

$(document).ready(function() {
  $('.carousel').carousel({
    interval: 3000,
  });
});
