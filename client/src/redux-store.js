import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import rootReducers from "./reducers";

const reduxStore = createStore(rootReducers, applyMiddleware(reduxThunk));

export default reduxStore;
