import { AppBar, Typography } from '@mui/material'
import React from 'react'

import { ReduxDemo } from '../components/ReduxDemo'

function App() {
  return (
    <div className="flex flex-col items-center w-screen h-screen p-4 [&>*]:mb-4">
      <AppBar className="py-4">
        <Typography variant="h3" className="text-center">
          Тест РТК и хук форм
        </Typography>
      </AppBar>
      <ReduxDemo />
    </div>
  )
}

export default App
