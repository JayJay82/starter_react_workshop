import React, {Component} from 'react';
import {connect} from 'react-redux';
import { selectVideo } from '../actions/index';

class VideoList extends Component {    
    renderItems = () => {
        return this.props.videos.map((video) => {
            const imageUrl = video.snippet.thumbnails.default.url;
            return(
                <li onClick= {() => this.props.selectVideo(video)} key={video.etag} className="list-group-item">
                    <div className="video-list media">
                        <div className="media-left">
                            <img className="media-object" src={imageUrl} />
                        </div>
                        <div className="media-body">
                            <div className="media-heading">{video.snippet.title}</div>
                        </div>
                        </div>
                    </li>
            )
        })
    }
    

    render() {
        if(!this.props.videos)
            return <div>Video List</div>
        return(
            <ul className="col-md-4 list-group">
               {this.renderItems()}
            </ul>
        )
    }
}

function mapState({videos}) {
    return {
        videos : videos[videos.length-1]
    }
}
export default connect(mapState,{selectVideo})(VideoList);