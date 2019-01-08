import * as actionTypes from './action_types';
import { createAction } from 'redux-actions';
import { stubIndividualBlockData } from './stub';


export const fetchIndividualBlock = (block_hash) => dispatch => {
    dispatch(createAction(actionTypes.LOADING_INDIVIDUAL_BLOCK)());
    fetch("https://blockchain.info/rawblock/"+block_hash, {mode:'no-cors'})
        .then((resp) => resp)
        .then(function(data) {
            dispatch(createAction(actionTypes.FETCH_INDIVIDUAL_BLOCK)(stubIndividualBlockData)); // adapter to get only the required columns

        })
        .catch(function(error) {
            dispatch(createAction(actionTypes.ERROR_INDIVIDUAL_BLOCK)(error));
        }); 
    

}

