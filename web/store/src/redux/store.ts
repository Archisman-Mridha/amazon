import { configureStore } from "@reduxjs/toolkit"

export const reduxStore= configureStore({
    reducer: { }
})

export type rootReduxStateType= ReturnType<typeof reduxStore.getState>

export type reduxDispatchType= typeof reduxStore.dispatch