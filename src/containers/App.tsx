import { AppBar, Typography } from '@mui/material'
import React from 'react'

import { HookFormDemo } from '../components/HookFormDemo'
import { ReduxDemo } from '../components/ReduxDemo'

function App() {
  return (
    <div className="flex flex-col items-center w-screen h-[calc(100vh-120px)] mt-[120px] [&>*]:mb-4">
      <AppBar className="py-4">
        <Typography variant="h3" className="text-center">
          Тест РТК и хук форм
        </Typography>
      </AppBar>
      <ReduxDemo />
      <HookFormDemo />
    </div>
  )
}

export default App
