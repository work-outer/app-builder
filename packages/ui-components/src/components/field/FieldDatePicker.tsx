import React from 'react'
import { FormField } from '../form/FormField'

export type FieldDatePickerProps = {
    name: string
}

export function FieldDatePicker(props:FieldDatePickerProps ) {

    const { name, ...res} = props
    return <FormField 
        {...res}
        name={name}
        valueType='date'
    />
}

export const FieldDatePickerSettings = {
    name:'Steedos:FieldDatePicker',
    inputs:[
        {name: 'name', type: 'text', defaultValue:'NewFieldDatePicker'}
    ],
    canHaveChildren: false
}