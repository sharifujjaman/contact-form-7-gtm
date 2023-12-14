<script>
document.addEventListener('wpcf7mailsent', function(event) {
  var inputs = event.detail.inputs;
  var firstName = '';
  var lastName = '';
  var email = '';
  var phoneNumber = '';

  // Loop through the form inputs to extract the required fields
  for (var i = 0; i < inputs.length; i++) {
    switch (inputs[i].name) {
      case 'first-name':
        firstName = inputs[i].value;
        break;
      case 'last-name':
        lastName = inputs[i].value;
        break;
      case 'your-email':
        email = inputs[i].value;
        break;
      case 'your-mobile':
        phoneNumber = inputs[i].value;
        break;
      // Add more cases for other fields if needed
    }
  }

  // Push data to Google Tag Manager dataLayer
  window.dataLayer.push({
    'event': 'cf7submission',
    'formId': event.detail.contactFormId,
    'firstName': firstName,
    'lastName': lastName,
    'email': email,
    'phoneNumber': phoneNumber
  });
});
</script>
