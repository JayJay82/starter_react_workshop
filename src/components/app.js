import React, { Component } from 'react';
import SearchBar from './searchbar.component';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

const search_url = "https://www.googleapis.com/youtube/v3/search?part=snippet&order=relevance&maxResults=10&q=";
const api_key = "AIzaSyDYY7s68X-pS4ouLUvEKNP1mzKZxOe3MoQ";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos : []};
  }
  searchTerm = (term) => {
    YTSearch({key : api_key, term : term} ,(videos) => {
      console.log(videos);
      this.setState({ 'videos' : videos });
    });
  }
  render() {
    const videoSearch = _.debounce((term) => { this.searchTerm(term)},300);
    return (
      <div>
        <SearchBar onSearch = { videoSearch } />
      </div>
    );
  }
}
