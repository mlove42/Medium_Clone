import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import sessionReducer from "./session";
import storyReducer from "./story";
import commentsReducer from "./comment";
import likesReducer from "./likes";
import followReducer from "./follow";
const rootReducer = combineReducers({
    session: sessionReducer,
    story: storyReducer,
    comment: commentsReducer,
    likes: likesReducer,
    author: followReducer,
});

let enhancer;

if (process.env.NODE_ENV === "production") {
    enhancer = applyMiddleware(thunk);
} else {
    const logger = require("redux-logger").default;
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
