import React from 'react'
import { FormField } from '../form/FormField'



export type FieldPasswordProps = {
    name: string,
    placeholder: string
}

export function FieldPassword(props:FieldPasswordProps ) {

    const { name, placeholder, ...res} = props
    return <FormField 
        {...res}
        name={name}
        valueType='password'
        placeholder={placeholder}
    />
}

export const FieldPasswordSettings = {
    name:'Steedos:FieldPassword',
    inputs:[
        {name: 'name', type: 'text', defaultValue:'NewFieldPassword'}
    ],
    canHaveChildren: false
}