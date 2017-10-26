var searchYouTube = ({key, query, max = 5}, callback) => { //({key, query, max=5}, callback)
  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    key: key,
    q: query,
    maxResults: max,
    type: 'video',
    videoEmbaddable: 'true'
  })
  .done(({items}) => {
    if (callback) {
      callback(items);
    }
  })
  .fail(({responseJSON}) => {
    responseJSON.error.errors.forEach((err) => console.error(err));
  });
  
  // $.ajax({
  //   url: 'https://www.googleapis.com/youtube/v3/search',
  //   type: 'GET',
  //   dataType: 'json',
  //   data: {
  //     key: 'AIzaSyAxqRfmlsNEgTTfymTt8pgi90ZjghZQ4sI',
  //     maxResults: 5,
  //     q: query,
  //     chart: 'mostPopular',
  //     part: 'snippet'
  //   }
  // }).done((response) => { 
  //   callback(response.items);
  // });

};

window.searchYouTube = searchYouTube;
