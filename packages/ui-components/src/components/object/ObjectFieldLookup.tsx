import React from "react";

import { FormProps } from "../form/Form";
import { FieldLookup } from "../field/FieldLookup";

export type ObjectFieldLookupProps = {
    referenceTo: string,
    fieldName: string,
    enableAdd: boolean
} & FormProps

export function ObjectFieldLookup(props:ObjectFieldLookupProps) {

    const {  referenceTo, fieldName, placeholder, ...rest} = props
    
    const fieldLookupProps:ObjectFieldLookupProps = {
        referenceTo: referenceTo,
        fieldName: fieldName,
        enableAdd: true,
        placeholder: placeholder
    }
    return (
        <FieldLookup 
           {...rest}
           {...fieldLookupProps}
        />
    )
}