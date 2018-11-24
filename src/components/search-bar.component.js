import React,{Component} from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import { fetchVideos } from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term : ''};
    }
    componentDidMount() {
        this.fetchDebounce("avengers");
    }
    onInputChange = (event) => {
        this.setState({ term : event.target.value});
        this.fetchDebounce(event.target.value);
        //this.props.fetchVideos(event.target.value);
     }
     
    fetchDebounce = _.debounce((term) => {this.props.fetchVideos(term);},300);

   // Controlled Component - quando il valore è settato dallo state
     render() {
       return (
        <div className="search-bar">
            <input
            value = { this.state.term }
            onChange= { this.onInputChange } />
        </div>
    );
   }
}
export default connect(null,{fetchVideos})(SearchBar);