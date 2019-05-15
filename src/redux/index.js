import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import ducksExample from './ducks/ducksExample';

const rootReducer = combineReducers({
  ducksExample,
  form: formReducer,
});

export default rootReducer;
