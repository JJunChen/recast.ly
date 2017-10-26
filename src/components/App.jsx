class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: exampleVideoData,
      currentVideo: exampleVideoData[0] 
    };
    
  }
  
  componentDidMount() {
    this.props.searchYouTube('', this.setVideoListState.bind(this));
  }
  
  selectVideo(video) {
    this.setState({currentVideo: video});  
  }
  
  setVideoListState(videosResult) {
    this.setState({
      currentVideo: videosResult[0],
      videos: videosResult
    });
  }

  searchVideos(query) {
    this.props.searchYouTube(query, this.setVideoListState.bind(this));
  }
  
  
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search searchVideos={this.searchVideos.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos} onClickHandler={this.selectVideo.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }
  
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
