import React, {Component} from 'react';
import {connect} from 'react-redux';

class VideoDetail extends Component {
    render() {
        if(!this.props.video)
            return <div>Loading</div>
        const videoId = this.props.video.id.videoId;
        const url = 'https://www.youtube.com/embed/'+ videoId;
        return(    
            <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
              <div className="details">
                  <div>{this.props.video.snippet.title}</div>
                  <div>{this.props.video.snippet.description}</div>
              </div>
        </div>
        )
    }
}

function mapState({videoSelected}) {
    return {
        video : videoSelected[videoSelected.length-1]
    }
}
export default connect(mapState,null)(VideoDetail);