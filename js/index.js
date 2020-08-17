// handles contact form submission
var submitted = false;
// $('#gform').on('submit', function(e) {
//   e.preventDefault();
//   $('#gform *').slideUp(500, function() {
//     $(this).remove();
//   });
//   $('#gform').prepend('Thanks so much for your submission!');
// });

var message = '';

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

(() => {
  const form = $('#gform');

  form.on('submit', function(e) {
    e.preventDefault();

    // Prepare data to send
    const data = {
      name: $('#contact-name').val(),
      reply_to: $('#contact-email').val(),
      message: $('#contact-message').val(),
    };

    // Log what our lambda function will receive
    console.log(JSON.stringify(data));

    // Construct an HTTP request
    var xhr = new XMLHttpRequest();
    xhr.open(
      'POST',
      'https://mblnwogcmh.execute-api.us-east-1.amazonaws.com/dev/static-site-mailer',
      true,
    );
    xhr.setRequestHeader('Accept', 'application/json; charset=utf-8');
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

    // Send the collected data as JSON
    xhr.send(JSON.stringify(data));

    xhr.onloadend = (response) => {
      if (response.target.status === 200) {
        // The form submission was successful
        $('#gform *').slideUp(500, function() {
          $(this).remove();
        });
        $('#gform').prepend("Thanks so much for your submission! I'll be in touch shortly.");
      } else {
        // The form submission failed
        $('#gform *').slideUp(500, function() {
          $(this).remove();
        });
        $('#gform').prepend('Something went wrong, please use the contact links...');
      }
    };
  });
})();
