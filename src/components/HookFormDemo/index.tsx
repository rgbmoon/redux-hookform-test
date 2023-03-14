import { Button, Grid } from '@mui/material'
import React, { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { useAppDispatch, useAppSelector } from '../../hooks'
import { DemoFormState, formSlice, selectForm } from '../../store/slices/formSlice'
import { Checkbox } from './components/Checkbox'
import { Input } from './components/Input'
import { Select } from './components/Select'

const OPTIONS = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
]

const HookFormDemo: FC = () => {
  const defaultValues = useAppSelector(selectForm)
  const dispatch = useAppDispatch()
  const { updateFormData } = formSlice.actions

  const { handleSubmit, ...formProps } = useForm({ defaultValues })

  const onSubmit: SubmitHandler<DemoFormState> = (data) => dispatch(updateFormData(data))

  return (
    <form className="flex flex-col [&>*]:mb-2 min-w-[600px]" onSubmit={handleSubmit(onSubmit)}>
      <Grid container columns={2} spacing="16px">
        <Grid item xs={1}>
          <Input name="title" inputProps={{ placeholder: 'Введите тайтл' }} {...formProps} />
        </Grid>
        <Grid item xs={1}>
          <Select name="select" options={OPTIONS} {...formProps} />
        </Grid>
      </Grid>
      <Grid container columns={2} spacing="16px">
        <Grid item xs={1}>
          <Checkbox name="publish" {...formProps} />
        </Grid>
      </Grid>
      <Button type="submit">Отправить</Button>
    </form>
  )
}

export { HookFormDemo }
