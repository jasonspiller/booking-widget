console.log('Hello Dave.');


// jquery ready
$(function(){

  var bedroomSliderValue = document.getElementById("bedroomSlider");
  var bathroomSliderValue = document.getElementById("bathroomSlider");
  bedrooms.innerHTML = bedroomSliderValue.value;
  bathrooms.innerHTML = bathroomSliderValue.value;
  

  // update room values
  bedroomSlider.oninput = function() {
    bedrooms.innerHTML = bedroomSliderValue.value;
  }

  bathroomSlider.oninput = function() {
    bathrooms.innerHTML = bathroomSliderValue.value;
  }

});
