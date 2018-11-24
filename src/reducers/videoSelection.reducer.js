import _ from 'lodash';
import { SELECTED_VIDEO } from '../actions/index';
import { FETCH_VIDEOS } from '../actions/index';

export default function(state = [], action) {
    switch(action.type){
        case FETCH_VIDEOS : {
            return [...state , action.payload.data.items[0]];
         }
        case SELECTED_VIDEO : {
          return [...state , action.payload];
        }
        default : return state;
    }
}