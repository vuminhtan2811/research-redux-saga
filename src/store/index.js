import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import createSagaMiddleware from "redux-saga"
import rootReducer from "./reducers"

const saga = createSagaMiddleware()

const composeEnhancers =
  process.env.NODE_ENV !== "production" &&
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        shouldHotReload: false
      })
    : compose

const configStore = () => {
  const middleware = [thunk, saga]
  const enhancer = composeEnhancers(applyMiddleware(...middleware))
  const store = createStore(rootReducer, enhancer)
  return store
}

export default configStore
