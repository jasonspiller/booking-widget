console.log('Hello Dave.');


// jquery ready
$(function(){

  var bedroomTotal = document.getElementById('bedroomSlider'),
      bathroomTotal = document.getElementById('bathroomSlider'),
      pricing,
      discount = 0,
      estimate = 0;

  // output values to UI
  bedrooms.innerHTML = bedroomTotal.value;
  bathrooms.innerHTML = bathroomTotal.value;
  

  // calculate quote total
  function calculateQuote() {

    // calculate total cost
    estimate = pricing[bedroomTotal.value][bathroomTotal.value];

    // apply discount
    estimate -= (estimate * discount);

    // round to nearest dollar and output
    $('.quote').html(Math.round(estimate));
  }

  // update room values
  bedroomSlider.oninput = function() {
    bedrooms.innerHTML = bedroomTotal.value;
    calculateQuote()
  }

  bathroomSlider.oninput = function() {
    bathrooms.innerHTML = bathroomTotal.value;
    calculateQuote()
  }

  // get discount, if any
  $('.interval').click(function(event) {
    event.preventDefault();

    // remove class from other buttons and add to selected button
    $('.interval').removeClass('selected');    
    $(this).addClass('selected');

    // determine discount value
    switch($(this).attr('id')) {
      case 'weekly':
          discount = .20;
          break;
      case 'bi-weekly':
          discount = .15;
          break;
      case 'monthly':
          discount = .10;
          break;
      default:
          discount = 0;
    }

    calculateQuote()

  });

  $.ajax({
    type: 'GET',
    dataType: "json",
    url: "pricing.json",
    success: function(result) {
      pricing = result;
      calculateQuote();
    },
    error: function() {
      alert('Unable to retrieve pricing. Please try again later.');
    }
  });
  

  // add focus to name on modal
  $('#quoteModal').on('shown.bs.modal', function() {
    $('#name').trigger('focus');
  });

});
