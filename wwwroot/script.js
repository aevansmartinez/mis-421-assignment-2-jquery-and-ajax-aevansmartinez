var len;
var results = '';
var curr = 0;

function apiSearch() {
  var params = {
    "q": $("#query").val(),
    "count": "50",
    "offset": "0",
    "mkt": "en-us"
  };

  $.ajax({
      url: 'https://api.bing.microsoft.com/v7.0/search?' + $.param(params),
      beforeSend: function (xhrObj) {
        xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "0e5b850fa44547cebd5b04989ea90a2e"); 
      },
      type: "GET",
    })
    .done(function (data) {
      len = data.webPages.value.length;
      for (i = 0; i < len; i++) {
        results += "<p><a href='" + data.webPages.value[i].url + "'>" + data.webPages.value[i].name + "</a>: " + data.webPages.value[i].snippet + "</p>";
      }
      console.log(results);
      $('#searchResults').html(results);
      $('#searchResults').css('visibility', 'visible');
      $('#searchResults').dialog();
    })
    .fail(function () {
      alert("error");
    });
}

//SEARCH BUTTON  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~DONE
$('#searchButton').click(function() {
    apiSearch();
    console.log("finished search");
});

//LUCKY BTTON  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~DONE
$('#luckyButton').click(function() {
  var params = {
    "q": $("#query").val(),
    "count": "50",
    "offset": "0",
    "mkt": "en-us"
  };

  $.ajax({
    url: 'https://api.bing.microsoft.com/v7.0/search?' + $.param(params),
    beforeSend: function (xhrObj) {
      xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "0e5b850fa44547cebd5b04989ea90a2e"); 
    },
    type: "GET",
  })
  .done(function (data) {
      if (data.webPages) {
          var firstResultUrl = data.webPages.value[0].url;
          window.location.href = firstResultUrl;
      } 
      else {
        alert("No results");
      }
    })
    .fail(function () {
      alert("error");
    });
});

// TIME BUTTON  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~DONE
$('#timeButton').click(function() {
    
  var currentTime = new Date().toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit' });
  console.log(currentTime);
  $('#time').css('visibility', 'visible');
  $('#time').html(currentTime).dialog();
});

//CHANGE BACKGROUND PHOTO ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~DONE
$('h1').click(function() {
  if (curr===0){  
    $('body').css('background-image', 'url("https://i.pinimg.com/originals/6d/f9/39/6df939580b51b057296abdf296cca0fb.png")');
    curr=1;
  }
  else {
    $('body').css('background-image', 'url("https://i.pinimg.com/originals/12/8f/5b/128f5b543c8bada5755fb3f57eb1d5c4.jpg")');
    curr=0;
  }
});
