import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/cartReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
});

// Apply middleware
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;