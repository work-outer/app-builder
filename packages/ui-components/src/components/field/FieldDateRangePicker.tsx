import React from 'react'
import { FormField, FormFieldProps } from '../form/FormField'

export type FieldDateRangePickerProps = {
    name: string
}& FormFieldProps

export function FieldDateRangePicker(props:FieldDateRangePickerProps ) {

    const { name, ...res} = props
    return <FormField 
        {...res}
        name={name}
        valueType='dateRange'
    />
}

export const FieldDateRangePickerSettings = {
    name:'Steedos:FieldDateRangePicker',
    inputs:[
        { name: 'name', type: 'string', defaultValue:'NewFieldDateRangePicker' },
        { name: 'label', type: 'string' }
    ],
    canHaveChildren: false
}