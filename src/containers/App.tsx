import React from 'react'

import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useAppDispatch, useAppSelector } from '../hooks'
import { demoSlice } from '../store/slices/demoSlice'

function App() {
  const count = useAppSelector((state) => state.demo.value)

  const { increment, decrement } = demoSlice.actions

  const dispatch = useAppDispatch()

  return (
    <div className="flex flex-col items-center w-screen h-screen p-4 [&>*]:mb-4">
      <Typography variant="h1">{count}</Typography>
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

export default App
