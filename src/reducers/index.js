import { combineReducers } from 'redux';
import VideosReducer from './videos.reducer'
import SelectedReducer from './videoSelection.reducer';
const rootReducer = combineReducers({
  videos : VideosReducer,
  videoSelected : SelectedReducer
});

export default rootReducer;
