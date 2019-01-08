import { LOADING_INDIVIDUAL_BLOCK } from '../actions/ViewBlock/action_types';
import { FETCH_INDIVIDUAL_BLOCK } from '../actions/ViewBlock/action_types';
import { ERROR_INDIVIDUAL_BLOCK } from '../actions/ViewBlock/action_types';

let stateValue={
    loading: false,
    data:{},
    dataCopyForSearch: {},
    error:''
};
export default function (state = stateValue, action) {
 
    switch (action.type) {
        case LOADING_INDIVIDUAL_BLOCK:
            return Object.assign({},state, {loading:true});
        case FETCH_INDIVIDUAL_BLOCK:
            return Object.assign({},state, {loading:false, data:action.payload, dataCopyForSearch:action.payload});
        case ERROR_INDIVIDUAL_BLOCK:
            return Object.assign({},state, {loading:false, data:{}, error:action.payload});
        default:
            return state;
    }
}
