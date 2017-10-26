class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      currentVideo: exampleVideoData[0] 
    };
    //searchYouTube('puppies', this.setVideoListState.bind(this));
  }
  
  componentDidMount() {
    this.props.searchYouTube('puppies', this.setVideoListState.bind(this));
  }
  
  selectVideo(video) {
    this.setState({currentVideo: video});  
  }
  
  setVideoListState(videosResult) {
    this.setState({
      currentVideo: videosResult[1],
      videos: videosResult
    }, () => {
      console.log(this.state.videos);
    });
  }
  
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search/>
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
