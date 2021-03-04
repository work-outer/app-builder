import React from 'react'
import { FormField, FormFieldProps } from '../form/FormField'

export type FieldTimePickerProps = {
    name: string
}& FormFieldProps

export function FieldTimePicker(props:FieldTimePickerProps ) {

    const { name, ...res} = props
    return <FormField 
        {...res}
        name={name}
        valueType='time'
    />
}

export const FieldTimePickerSettings = {
    name:'Steedos:FieldTimePicker',
    inputs:[
        { name: 'name', type: 'string', defaultValue:'NewFieldTimePicker' },
        { name: 'label', type: 'string' }
    ],
    canHaveChildren: false
}