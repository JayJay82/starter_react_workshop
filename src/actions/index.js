import axios from 'axios';
const search_url = "https://www.googleapis.com/youtube/v3/search?key=AIzaSyDYY7s68X-pS4ouLUvEKNP1mzKZxOe3MoQ&part=snippet&order=relevance&maxResults=10&q=";


export const FETCH_VIDEOS = 'FETCH_VIDEOS';
export function fetchVideos(term) {
    const url = search_url + term;
    const request = axios.get(url);
    console.log(request);
    return {
        type : FETCH_VIDEOS,
        payload : request
    };
}