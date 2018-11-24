import React, { Component } from 'react';
import SearchBar from './search-bar.component';
import VideoList from './video-list.component';
import VideoDetail from './video-detail.component';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <VideoList />
        <VideoDetail />
      </div>
    );
  }
}
