
export const FETCH_VIDEOS = 'FETCH_VIDEOS';
export function fetchVideos(term) {
    console.log(term);
    return {
        type : FETCH_VIDEOS,
        payload : {}
    };
}