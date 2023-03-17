import { Button, Typography } from '@mui/material'
import React, { FC } from 'react'

import { useActions, useAppSelector } from '../../hooks'

const ReduxDemo: FC = () => {
  const count = useAppSelector((state) => state.demo.value)

  const { increment, decrement } = useActions()

  return (
    <div className="flex flex-col [&>*]:mb-4">
      <Typography variant="h4" className="text-center">
        {count}
      </Typography>
      <div className="flex gap-2">
        <Button color="success" variant="outlined" onClick={() => increment()}>
           Плюс сус
        </Button>
        <Button color="secondary" variant="outlined" onClick={() => decrement()}>
          Минус сус
        </Button>
      </div>
    </div>
  )
}

export { ReduxDemo }
