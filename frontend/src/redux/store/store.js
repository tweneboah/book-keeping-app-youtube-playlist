import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBookReducer } from '../reducers/books/createBookReducer';
import { bookListReducer } from '../reducers/books/bookListReducer';

const middlewares = [thunk];

const reducer = combineReducers({
  bookCreated: createBookReducer,
  booksList: bookListReducer,
});

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export { store };
