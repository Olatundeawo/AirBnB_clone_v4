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
    $.('div#api_status').addClass('available');
  } else {
    $.('div#api_status').removeClass('available');
  }
});
});
