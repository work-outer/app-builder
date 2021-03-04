import React from "react"
import { FormField } from "../form/FormField"


export type FormFieldSelectProps = {
  name: string,
}

export function FormFieldSelect(props:FormFieldSelectProps) {
  const {name, ...rest} = props;
  return <FormField 
    {...rest}
    name={name} 
    valueType='select'
    />
}

export const FormFieldSelectSettings = {
  name: 'Steedos:FieldSelect',
  inputs: [
    { name: 'name', type: 'text', defaultValue:'NewField'  },
    { name: 'label', type: 'text' },
  ],
  canHaveChildren: false
}