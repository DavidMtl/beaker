import { List, Map, fromJS } from 'immutable';
import { UPDATE_SETTING } from '../actions/settings';

const initialState = Map( {
	    auto_update_enabled: 0,
		authMessage : 'Not attempted to connect yet'
    });

export default function settings(state = initialState, action) {
  switch (action.type) {
    case UPDATE_SETTING :
    {
    	let payload = {};
		
		payload[ action.key ] = action.value;
        return state.mergeDeep( payload );
    }
      return
    default:
      return state
  }
}
