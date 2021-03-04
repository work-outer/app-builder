import React from "react"
import { FormField } from "../form/FormField"


export type FieldSelectProps = {
  name: string,
}

export function FieldSelect(props:FieldSelectProps) {
  const {name, ...rest} = props;
  return <FormField 
    {...rest}
    name={name} 
    valueType='select'
    />
}

export const FieldSelectSettings = {
  name: 'Steedos:FieldSelect',
  inputs: [
    { name: 'name', type: 'text', defaultValue:'NewField'  },
    { name: 'label', type: 'text' },
  ],
  canHaveChildren: false
}