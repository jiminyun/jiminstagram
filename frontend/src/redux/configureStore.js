import { combineReducers, createStore, applyMiddleware } from "redux";
import { routerReducer, routerMiddleware } from "react-router-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { i18nState } from "redux-i18n";
import createHistory from "history/createBrowserHistory";
import thunk from "redux-thunk";
import user from "redux/modules/user";
import photos from "redux/modules/photos";
import notification from "redux/modules/notification";
import msg from "redux/modules/msg";

const env = process.env.NODE_ENV;

const history = createHistory();

const middlewares = [thunk, routerMiddleware(history)];

if (env === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

const rootReducer = combineReducers({
  user,
  photos,
  notification,
  routing: routerReducer,
  i18nState,
  msg
});

let store;

if (env === "development") {
  store = initialState =>
    createStore(
      rootReducer,
      composeWithDevTools(applyMiddleware(...middlewares))
    );
} else {
  store = initialState =>
    createStore(rootReducer, applyMiddleware(...middlewares));
}

export { history };

export default store;
