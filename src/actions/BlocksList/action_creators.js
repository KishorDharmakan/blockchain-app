import * as actionTypes from './action_types';
import { createAction } from 'redux-actions';
import adapter from './adapter';
import { stubBlocksData } from './stub';


export const fetchBlocks = () => dispatch => {
    dispatch(createAction(actionTypes.LOADING_BLOCKS)());
    fetch("https://blockchain.info/blocks/1546860154204?format=json", { mode: 'no-cors' })
        .then((resp) => resp)
        .then(function (data) {
            dispatch(createAction(actionTypes.FETCH_BLOCKS)(adapter(stubBlocksData.blocks))); // adapter to get only the required columns

        })
        .catch(function (error) {
            dispatch(createAction(actionTypes.ERROR_BLOCKS)(error));
        });
}

export const fetchBlocksWithFilter = (data, payload) => dispatch => {

    const filterData = data.filter((record) => {
        return (record.height.includes(payload) || record.hash.includes(payload)
            || record.time.includes(payload));  // Contains search
    })
    dispatch(createAction(actionTypes.SEARCH_FETCH_BLOCK)(filterData));

}