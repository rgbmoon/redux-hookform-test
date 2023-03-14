import { InputProps, Input as MUIInput } from '@mui/material'
import React from 'react'
import { Controller, ControllerProps, FieldValues } from 'react-hook-form'

type Props<T extends FieldValues> = Omit<ControllerProps<T>, 'render'> & {
  inputProps?: InputProps
}

const Input = <T extends FieldValues>({ inputProps, ...props }: Props<T>) => {
  return (
    <Controller
      {...props}
      render={({ field }) => (
        <MUIInput className="h-[40px] py-[8.5px]" fullWidth {...field} {...inputProps} />
      )}
    />
  )
}

export { Input }
