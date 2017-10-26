var searchYouTube = (query, callback) => {
  // TODO
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    dataType: 'json',
    data: {
      key: 'AIzaSyAxqRfmlsNEgTTfymTt8pgi90ZjghZQ4sI',
      maxResults: 5,
      q: query,
      chart: 'mostPopular',
      part: 'snippet'
    }
  }).done((response) => {  // ----> you missed this part
    callback(response.items);
  });

};

window.searchYouTube = searchYouTube;
