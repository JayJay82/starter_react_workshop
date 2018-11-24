import { combineReducers } from 'redux';
import VideosReducer from './videos.reducer'

const rootReducer = combineReducers({
  videos : VideosReducer
});

export default rootReducer;
