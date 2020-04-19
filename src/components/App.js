import React, { Component } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

const KEY = "AIzaSyBZZu85EtkpN3EYZxHxeNnvkzpJTEjAmmM";

export default class App extends Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount(){
      this.parentOnFormSubmit('hi')
  }

  parentOnFormSubmit = async (term) => {
    const result = await youtube.get("/search/", {
      params: {
        q: term,
        part: "snippet",
        type: "video",
        maxResults: 5,
        key: KEY,
      },
    });
    this.setState({ videos: result.data.items ,
        selectedVideo : result.data.items[0]});

  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar parentOnFormSubmit={this.parentOnFormSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
