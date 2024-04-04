import {applyMiddleware,createStore} from "redux";
import  {thunk}  from "redux-thunk";
import reducers from "./state/action-creater/reducer/index";
const store=createStore(reducers,{},applyMiddleware(thunk))
export default store;
