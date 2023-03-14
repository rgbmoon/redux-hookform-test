import { CheckboxProps, Checkbox as MUICheckbox } from '@mui/material'
import React from 'react'
import { Controller, ControllerProps, FieldValues } from 'react-hook-form'

type Props<T extends FieldValues> = Omit<ControllerProps<T>, 'render'> & {
  checkboxProps?: CheckboxProps
}

const Checkbox = <T extends FieldValues>({ checkboxProps, ...props }: Props<T>) => {
  return (
    <Controller
      {...props}
      render={({ field }) => <MUICheckbox className="w-fit" {...field} {...checkboxProps} />}
    />
  )
}

export { Checkbox }
