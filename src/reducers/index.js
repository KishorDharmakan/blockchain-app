import { combineReducers } from 'redux';
import BlocksReducer from './blocks_reducer';
import ViewBlockReducer from './view_block_reducer';


const rootReducer = combineReducers({
  listBlocks:BlocksReducer,
  viewBlock:ViewBlockReducer,
});

export default rootReducer;
