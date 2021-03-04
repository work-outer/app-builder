import React from 'react'
import { FormField, FormFieldProps } from '../form/FormField'

export type FieldDateTimePickerProps = {
    name: string
}& FormFieldProps

export function FieldDateTimePicker(props:FieldDateTimePickerProps ) {

    const { name, ...res} = props
    return <FormField 
        {...res}
        name={name}
        valueType='dateTime'
    />
}

export const FieldDateTimePickerSettings = {
    name:'Steedos:FieldDateTimePicker',
    inputs:[
        {name: 'name', type: 'text', defaultValue:'NewFieldDateTimePicker'}
    ],
    canHaveChildren: false
}