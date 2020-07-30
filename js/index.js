// handles contact form submission
var submitted = false;
$('#gform').on('submit', function(e) {
  e.preventDefault();
  $('#gform *').slideUp(500, function() {
    $(this).remove();
  });
  $('#gform').prepend('Your submission has been processed...');
});
