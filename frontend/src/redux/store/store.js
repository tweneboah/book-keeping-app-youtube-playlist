import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBookReducer } from '../reducers/books/createBookReducer';
import { bookListReducer } from '../reducers/books/bookListReducer';
import { userReducer } from '../reducers/users/userAuthReducer';

const middlewares = [thunk];

const reducer = combineReducers({
  bookCreated: createBookReducer,
  booksList: bookListReducer,
  userLogin: userReducer,
});

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export { store };
