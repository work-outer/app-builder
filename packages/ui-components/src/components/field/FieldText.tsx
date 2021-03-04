import React from "react";
import { FormField } from "../form/FormField";


export type FieldTextProps = {
    name: string,
    placeholder: string
}

export function FieldText(props:FieldTextProps){

    const {name, placeholder, ...rest}  = props;

    return <FormField
        {...rest}
        name={name}
        valueType='text'
        placeholder={placeholder}        
    />
}

export const FieldTextSettings = {
    name: 'Steedos:FieldText',
    inputs: [
      { name: 'name', type: 'text', defaultValue:'NewFieldText'  },
      { name: 'label', type: 'text' },
      { name: 'placeholder', type: 'text'}
    ],
    canHaveChildren: false
  }