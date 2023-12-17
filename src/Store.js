import { createStore } from "redux";
import RootReducers from "./redux/Reducers/Reducersmain";


const store = createStore(RootReducers)

export default store