import { Grid, Typography } from '@mui/material'
import React, { FC } from 'react'

import { useAppSelector } from '../../hooks'
import { selectCount } from '../../store/slices/demoSlice'
import { selectForm } from '../../store/slices/formSlice'

const StateMonitor: FC = () => {
  const demoState = useAppSelector(selectCount)
  const formState = useAppSelector(selectForm)

  return (
    <div className="w-full p-4 bg-slate-200 border border-neutral-400 rounded-lg">
      <Grid container columns={2} spacing="16px">
        <Grid item xs={1}>
          <Typography variant="h4">Стейт счетчика</Typography>
          <Typography variant="body1">{demoState}</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography variant="h4">Стейт формы</Typography>
          <Typography variant="body1" className="whitespace-pre">
            {JSON.stringify(formState, null, 2)}
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export { StateMonitor }
