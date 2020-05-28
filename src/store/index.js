import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { createEpicMiddleware } from "redux-observable";

import rootReducer from "../reducer";
import promiseMiddleware from "../middleware/promise";
import epics from "../epics";

const epicMiddleware = createEpicMiddleware();

const composeEnhancers = composeWithDevTools({});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, promiseMiddleware, epicMiddleware))
);
export default store;

epicMiddleware.run(epics);
