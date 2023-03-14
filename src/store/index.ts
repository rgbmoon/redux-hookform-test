import { configureStore } from '@reduxjs/toolkit'

import demoReducer from './slices/demoSlice'
import formReducer from './slices/formSlice'

export const store = configureStore({
  reducer: {
    demo: demoReducer,
    form: formReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
