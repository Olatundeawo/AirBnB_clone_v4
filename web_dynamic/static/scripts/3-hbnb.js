$(document).ready(function () {
  let checkboxChecked = {};
  $(document).on('change', "input[type='checkbox']", function () {
    if (this.checked) {
      checkboxChecked[$(this).data('id')] = $(this).data('name');
    } else {
      delete checkboxChecked[$(this).data('id')];
    }
    let value = Object.values(checkboxChecked);
    if (value.length > 0) {
      $('div.amenities > h4').text(value.join(', '));
    } else {
      $('div.amenities > h4').html('&nbsp;');
    }
  });
});


let url = 'http://0.0.0.0:5001/api/v1/status/';
$.ajax(url).done(function (data) {
  if (data.status === 200) {
    $('div#api_status').addClass('available');
  } else {
    $('div#api_status').removeClass('available');
  }
});
});

$.ajax({
  url: 'http://0.0.0.0:5001/api/v1/places_search/',
  type: 'post',
  data: '{}',
  contentType: 'application/json',
  success: function(d) {
    for (let currentPlace of data) {
	    $('.places').append('<article> <div class="title"> <h2>' + currentPlace.name + '</h2><div class="price_by_night">' + '$' + currentPlace.price_by_night + '</div></div> <div class="information"> <div class="max_guest"> <i class="fa fa -users fa-3x" aria-hidden="true"></i><br />' + currentPlace.max_guest + ' Guests</div><div class="number_rooms"> <i class="fa fa -users fa-3x" aria-hidden="true"></i><br />' + currentPlace.number_rooms + ' Bedrooms</div><div class="number_bathrooms"> <i class="fa fa -users fa-3x" aria-hidden="true"></i><br />' + currentPlace.number_bathrooms + ' Bathroom </div></div> <div class="user"></div><div class="description">' + '$' + currentPlace.description + '</div></article>');
	}
  }
});
