import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import authReducerDuck from "./reducers/authReducerDuck"
import storiesReducerDuck from "./reducers/storiesReducerDuck"
import bagReducerDuck from "./reducers/bagReducerDuck"


const rootReducer = combineReducers({
	auth: authReducerDuck,
	stories: storiesReducerDuck,
	bag: bagReducerDuck
})


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store