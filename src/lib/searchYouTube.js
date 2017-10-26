var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    dataType: 'json',
    data: {
      key: 'AIzaSyAxqRfmlsNEgTTfymTt8pgi90ZjghZQ4sI',
      maxResults: 5,
      q: 'puppies',
      part: 'snippet'
    }
  }).done((response) => {  // ----> you missed this part
    debugger;
    callback(response.items);
  });

};

window.searchYouTube = searchYouTube;
