import { Select as MUISelect, MenuItem, SelectProps } from '@mui/material'
import React from 'react'
import { Controller, ControllerProps, FieldValues } from 'react-hook-form'

export type DeafultOption = {
  value: any
  label: string
}

type Props<T extends FieldValues> = Omit<ControllerProps<T>, 'render'> & {
  selectProps?: SelectProps
  options: DeafultOption[]
}

const Select = <T extends FieldValues>({ options, selectProps, ...props }: Props<T>) => {
  return (
    <Controller
      {...props}
      render={({ field }) => (
        <MUISelect size="small" fullWidth {...field} {...selectProps}>
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </MUISelect>
      )}
    />
  )
}

export { Select }
