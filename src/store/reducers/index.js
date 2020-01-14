import { combineReducers } from "redux"
import task from "./task.reducer"
import ui from "./ui.reducer"

const rootReducer = combineReducers({ task, ui })

export default rootReducer
