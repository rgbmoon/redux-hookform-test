import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from '../'

export interface DemoFormState {
  title: string
  select: string
  publish: boolean
  demoArray: Array<{
    input: ''
  }>
}

const initialState: DemoFormState = {
  title: '',
  select: '',
  publish: false,
  demoArray: [],
}

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateFormData: (state, action: PayloadAction<DemoFormState>) => {
      state.publish = action.payload.publish
      state.select = action.payload.select
      state.title = action.payload.title
      state.demoArray = action.payload.demoArray
    },
  },
})

export const formActions = formSlice.actions

export const selectForm = (state: RootState) => state.form

export default formSlice.reducer
