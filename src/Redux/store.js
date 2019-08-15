import { createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import { createLogger } from 'redux-logger';
import rootReducer from "./Reducers/index";
import generatedefaultFileSystem from "../utils/defaultFiles";

const middlewares = [thunk];

if (process.env.NODE_ENV === `development`) {
    middlewares.push(createLogger());
}

const initialState = {
    fileSystem: generatedefaultFileSystem()
}


const store = createStore(rootReducer, initialState, compose(applyMiddleware(...middlewares)) )

export default store;