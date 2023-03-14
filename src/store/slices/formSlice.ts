import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from '../'

export interface DemoFormState {
  title: string
  select: string
  publish: boolean
}

const initialState: DemoFormState = {
  title: '',
  select: '',
  publish: false,
}

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateFormData: (state, action: PayloadAction<DemoFormState>) => {
      state.publish = action.payload.publish
      state.select = action.payload.select
      state.title = action.payload.title
    },
  },
})

export const { updateFormData } = formSlice.actions

export type UpdateFormDataAction = typeof updateFormData

export const selectForm = (state: RootState) => state.form

export default formSlice.reducer
