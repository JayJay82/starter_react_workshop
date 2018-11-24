import React, {Component} from 'react';

export default class VideoList extends Component {
    constructor(props) {
        super(props);
    }
    
    renderItems = () => {
        return this.props.videos.map((video) => {
        const { title } = video.snippet;
        const imageUrl = video.snippet.thumbnails.default.url;
          return(
                <li key={video.etag} onClick={() => this.props.onVideoSelected(video)}  className="list-group-item">
                    <div className="video-list media">
                    <div className="media-left">
                        <img className="media-object" src={imageUrl} />
                    </div>
                    <div className="media-body">
                        <div className="media-heading">{title}</div>
                    </div>
                    </div>
                </li>
            )
        })
    }

    render() {
        if(!this.props.videos.length > 0) {
            return(
                <div>Loading</div>
            )
        }
        else {
            return(
                <div>
                    <ul className="col-md-4 list-group">
                       {this.renderItems()}
                    </ul>
                </div>
            )
        }
    }
}