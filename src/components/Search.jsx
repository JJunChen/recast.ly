var Search = (props) => {

  const onSearchHandler = (event) => {
    let query = $('.form-control').val();
    props.searchVideos(query);
  };

  const checkEnter = (event) => {
    if (event.keyCode === 13) {
      onSearchHandler();
    }
  };

  const slowSearch = _.debounce(onSearchHandler, 500);

  return (
    <div className="search-bar form-inline">
      <input onChange={slowSearch} onKeyDown={checkEnter} className="form-control" type="text" />
      <button onClick={onSearchHandler} className="btn hidden-sm-down">
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div> 
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
