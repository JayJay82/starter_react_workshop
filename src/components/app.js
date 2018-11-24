import React, { Component } from 'react';
import SearchBar from './searchbar.component';
import VideoList from './video_list.component';
import VideoDetail from './video_detail.component';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

const search_url = "https://www.googleapis.com/youtube/v3/search?part=snippet&order=relevance&maxResults=10&q=";
const api_key = "AIzaSyDYY7s68X-pS4ouLUvEKNP1mzKZxOe3MoQ";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos : [] , selectedVideo : null };
    this.searchTerm("avengers");
  }
  searchTerm = (term) => {
    YTSearch({key : api_key, term : term} ,(videos) => {
      this.setState({ videos , selectedVideo : videos[0] });

    });
  }

  selectVideo = (video) => {
    this.setState({ selectedVideo : video});
    console.log(video);
  }
  render() {
    const videoSearch = _.debounce((term) => { this.searchTerm(term)},300);
    return (
      <div>
        <SearchBar onSearch = { videoSearch } />
        <VideoList onVideoSelected = {this.selectVideo} videos = { this.state.videos } />
        <VideoDetail video = {this.state.selectedVideo} />
      </div>
    );
  }
}
