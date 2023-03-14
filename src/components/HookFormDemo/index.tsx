import { Button, Grid } from '@mui/material'
import React, { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Checkbox } from './components/Checkbox'
import { Input } from './components/Input'
import { Select } from './components/Select'

type TFormValues = {
  title: string
  select: string
  publish: boolean
}

const OPTIONS = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
]

const defaultValues: TFormValues = {
  title: '',
  select: '',
  publish: true,
}

const HookFormDemo: FC = () => {
  const { handleSubmit, ...formProps } = useForm({ defaultValues })

  const onSubmit: SubmitHandler<TFormValues> = (data) => console.log(data)

  return (
    <form className="flex flex-col [&>*]:mb-2 min-w-[600px]" onSubmit={handleSubmit(onSubmit)}>
      <Grid container columns={2} spacing="16px">
        <Grid item xs={1}>
          <Input name="title" {...formProps} />
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
