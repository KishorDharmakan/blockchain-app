import { combineReducers } from 'redux';
import BlocksReducer from './blocks_reducer';


const rootReducer = combineReducers({
  listBlocks:BlocksReducer,
});

export default rootReducer;
