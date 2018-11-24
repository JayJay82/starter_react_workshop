import React, {Component} from 'react';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { value : '' };
    }
    valueChanged = (event) => {
        this.setState({ value : event.target.value});
        this.props.onSearch(event.target.value);
    }
    render() {
        return(
            <div className="search-bar">
                <input type="text" value={this.state.value}
                onChange = { this.valueChanged }
                />
            </div>
        )
    }
}