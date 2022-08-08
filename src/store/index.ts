import reducer from "./reducer"
import { legacy_createStore as createStore } from 'redux'



const store = createStore(reducer)

export default store



// ReturnType<T> -- 获取函数返回值类型。
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;