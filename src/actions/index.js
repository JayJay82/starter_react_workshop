import axios from 'axios';
const search_url = "https://www.googleapis.com/youtube/v3/search?key=AIzaSyDYY7s68X-pS4ouLUvEKNP1mzKZxOe3MoQ&part=snippet&order=relevance&maxResults=10&q=";


export const FETCH_VIDEOS = 'FETCH_VIDEOS';
export function fetchVideos(term) {
    const url = search_url + term;
    const request = axios.get(url);
    return {
        type : FETCH_VIDEOS,
        payload : request
    };
}

export const SELECTED_VIDEO = 'SELECTED_VIDEO';
export function selectVideo(video) {
    console.log("action");
    return {
        type : SELECTED_VIDEO,
        payload : video
    };
}