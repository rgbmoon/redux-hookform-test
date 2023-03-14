import { Button, Typography } from '@mui/material'
import React, { FC } from 'react'

import { useAppDispatch, useAppSelector } from '../../hooks'
import { demoSlice } from '../../store/slices/demoSlice'

const ReduxDemo: FC = () => {
  const count = useAppSelector((state) => state.demo.value)

  const { increment, decrement } = demoSlice.actions

  const dispatch = useAppDispatch()
  return (
    <div className="flex flex-col [&>*]:mb-4">
      <Typography variant="h4" className="text-center">
        {count}
      </Typography>
      <div className="flex gap-2">
        <Button color="success" variant="outlined" onClick={() => dispatch(increment())}>
           Плюс сус
        </Button>
        <Button color="secondary" variant="outlined" onClick={() => dispatch(decrement())}>
          Минус сус
        </Button>
      </div>
    </div>
  )
}

export { ReduxDemo }
