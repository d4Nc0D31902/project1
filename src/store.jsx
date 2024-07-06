import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";

import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

//* USERS *//
import {
  authReducer,
  userReducer,
  forgotPasswordReducer,
  allUsersReducer,
  userDetailsReducer,
  customerSalesReducer,
} from "./reducers/userReducers";

const reducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  forgotPassword: forgotPasswordReducer,
  allUsers: allUsersReducer,
  userDetails: userDetailsReducer,
  customerSales: customerSalesReducer,
});

let initialState = {};

const middlware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlware))
);

export default store;
