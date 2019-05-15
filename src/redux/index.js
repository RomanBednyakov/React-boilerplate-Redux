import { combineReducers } from 'redux';
import ducksExample from './ducks/ducksExample';

const rootReducer = combineReducers({
  ducksExample,
});

export default rootReducer;
