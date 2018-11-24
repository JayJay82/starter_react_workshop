import _ from 'lodash';
import { FETCH_VIDEOS } from '../actions/index';

export default function(state = [], action) {
    switch(action.type){
        case FETCH_VIDEOS : {
          return [...state , action.payload.data.items];
        }
        default : return state;
    }
}