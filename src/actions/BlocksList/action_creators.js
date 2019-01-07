import * as actionTypes from './action_types';
import { createAction } from 'redux-actions';
import adapter from './adapter';

export const fetchBlocks = () => dispatch => {
    console.log('inside fetchFood Action Creator');
    dispatch(createAction(actionTypes.LOADING_BLOCKS)());
    fetch("https://blockchain.info/blocks/1546860154204?format=json", 
        { method: "GET", mode: 'no-cors',
          headers: {
                    "Content-Type": "application/json",
                    'Access-Control-Allow-Origin':'*',
                    'Access-Control-Allow-Headers':'application/json',
                    "Access-Control-Allow-Credentials": true }})
        .then((resp) => resp.json())
        .then(function(data) {
            console.log('data:', data);
            dispatch(createAction(actionTypes.FETCH_BLOCKS)(adapter(data.blocks))); // adapter to get only the required columns

        })
        .catch(function(error) {
            console.log(error);
            dispatch(createAction(actionTypes.ERROR_BLOCKS)(error));
        }); 
}

export const fetchBlocksWithFilter = (data, payload) => dispatch => {
    console.log('inside fetchFoodWithFilter Action Creator payload:', payload);
    console.log('inside fetchFoodWithFilter Action Creator data:', data);
    //dispatch(createAction(actionTypes.LOADING_FOOD)());
    /**
     * Sample tested code for filter
     * const data=[{a:"Apple",b:"ball"},{a:"Cat",b:"Dog"},{a:"Eagle",b:"flip"},{a:"George",b:"Hall"},{a:"India",b:"Jackal"}
        ,{a:"Kangaroo",b:"Lollipop"}];
        const payload="Jackal";

        const filterData=data.filter((record)=>{
        console.log('record:', record);
        return (record.a===payload || record.b===payload);  // Equals Search
        // return (record.a.includes(payload) || record.b.includes(payload));  // Contains search
        }
        )
        console.log('filterData:', filterData);
     */
    const filterData=data.filter((record)=>{       
        return (record.ndbno.includes(payload) || record.name.includes(payload) 
            || record.measure.includes(payload) || record.weight===parseFloat(payload));  // Contains search
    })
    console.log('inside fetchFoodWithFilter Action Creator filterData:', filterData);
    dispatch(createAction(actionTypes.SEARCH_FETCH_BLOCK)(filterData)); 
    // fetch("")
    //     .then((resp) => resp.json())
    //     .then(function(data) {
    //         console.log('data:', data);
    //         dispatch(createAction(actionTypes.FETCH_FOOD)(adapter(data.report.foods))); // adapter to get only the required columns

    //     })
    //     .catch(function(error) {
    //         console.log(error);
    //         dispatch(createAction(actionTypes.ERROR_FOOD)(error));
    //     }); 
}