import { LOADING_BLOCKS } from '../actions/BlocksList/action_types';
import { FETCH_BLOCKS } from '../actions/BlocksList/action_types';
import { ERROR_BLOCKS } from '../actions/BlocksList/action_types';
import { SEARCH_FETCH_BLOCK } from '../actions/BlocksList/action_types';

let stateValue={
    loading: false,
    data:{},
    dataCopyForSearch: {},
    error:''
};
export default function (state = stateValue, action) {
 
    console.log('inside blocks_reducer state:', state);
    console.log('inside blocks_reducer action:', action);
    console.log('inside blocks_reducer stateValue:', stateValue);
    switch (action.type) {

        case LOADING_BLOCKS:
            console.log('Reducer LOADING_BLOCKS');
            return Object.assign({},state, {loading:true});
        case FETCH_BLOCKS:
            console.log('Reducer FETCH_BLOCKS:', action.payload);
            return Object.assign({},state, {loading:false, data:action.payload, dataCopyForSearch:action.payload});
        case ERROR_BLOCKS:
            console.log('Reducer ERROR_BLOCKS:', action.payload);
            return Object.assign({},state, {loading:false, data:{}, error:action.payload});
        case SEARCH_FETCH_BLOCK:
            console.log('Reducer SEARCH_FETCH_BLOCK:', action.payload);
            return Object.assign({},state, {loading:false, data:action.payload });
        default:
            return state;
    }
}
