import { combineReducers } from "redux"
import { reducer as formReducer } from "redux-form"

import task from "./task.reducer"
import ui from "./ui.reducer"
import modal from "./modal.reducer"

const rootReducer = combineReducers({
  task,
  ui,
  modal,
  form: formReducer
})

export default rootReducer
