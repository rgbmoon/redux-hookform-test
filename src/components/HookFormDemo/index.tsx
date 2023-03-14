import { Button, Grid, IconButton } from '@mui/material'
import React, { FC } from 'react'
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form'

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
  const { fields, append, remove } = useFieldArray({
    control: formProps.control,
    name: 'demoArray',
  })

  const onSubmit: SubmitHandler<DemoFormState> = (data) => dispatch(updateFormData(data))

  return (
    <form
      className="flex flex-col [&>*]:mb-2 min-w-[600px] p-4 bg-slate-100 rounded-lg"
      onSubmit={handleSubmit(onSubmit)}
    >
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
      <div className="flex flex-col p-4 bg-slate-200 border border-neutral-100 rounded-lg">
        {fields.map((field, index) => (
          <Grid key={field.id} container columns={4} spacing="16px">
            <Grid item xs={3}>
              <Input
                name={`demoArray.${index}.input`}
                inputProps={{ placeholder: 'Тут ваш текцт' }}
                {...formProps}
              />
            </Grid>
            <Grid item xs={1}>
              <IconButton color="secondary" onClick={() => remove(index)}>
                Х
              </IconButton>
            </Grid>
          </Grid>
        ))}
        <Button variant="outlined" color="secondary" onClick={() => append({ input: '' })}>
          Добавить инпут в массив
        </Button>
      </div>
      <Button type="submit" variant="outlined">
        Отправить
      </Button>
    </form>
  )
}

export { HookFormDemo }
