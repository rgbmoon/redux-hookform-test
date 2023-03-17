import { configureStore } from '@reduxjs/toolkit'

import { pokemonApi } from './api'
import demoReducer from './slices/demoSlice'
import formReducer from './slices/formSlice'

export const store = configureStore({
  reducer: {
    demo: demoReducer,
    form: formReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pokemonApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
