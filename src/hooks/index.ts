import { bindActionCreators } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'

import { AppDispatch, RootState } from '../store'
import { demoActions } from '../store/slices/demoSlice'
import { formActions } from '../store/slices/formSlice'

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

const actions = {
  ...formActions,
  ...demoActions,
}

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(actions, dispatch)
}
